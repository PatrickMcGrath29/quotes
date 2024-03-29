import type { RawQuote, RawReference, Reference } from '~/types'

export async function useQuotes(): Promise<RawQuote[]> {
  const quotes = await queryContent<RawQuote>('/quotes')
    .sort({ uuid: 1 })
    .find()

  return quotes.map((quote) => {
    return {
      ...quote,
      referenceId: quote.referenceId?.toLowerCase(),
      uuid: quote.uuid.toLowerCase(),
    }
  })
}

export async function useReferences(): Promise<Reference[]> {
  const references = await queryContent<RawReference>('/references')
    .sort({ uuid: 1 })
    .find()

  const toReference = (rawReference: RawReference): Reference => {
    return {
      uuid: rawReference.uuid.toLowerCase(),
      authorName: rawReference.authorName,
      referenceName: rawReference.referenceName,
      link: rawReference.link,
    }
  }

  return references.map(toReference)
}
