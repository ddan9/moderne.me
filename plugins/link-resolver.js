/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'insight') {
    return '/insight-of-the-day/' + doc.uid
  }

  return '/not-found'
}
