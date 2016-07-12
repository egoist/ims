// {
//   $gt: {
//     age: 14
//   }
// }
export default function check$query(item, key, value) {
  switch (key) {
    case '$gt':
      for (const queryKey in value) {
        if (item[queryKey] <= value[queryKey]) {
          return false
        }
      }
      return true
    case '$gte':
      for (const queryKey in value) {
        if (item[queryKey] < value[queryKey]) {
          return false
        }
      }
      return true
    case '$lt':
      for (const queryKey in value) {
        if (item[queryKey] >= value[queryKey]) {
          return false
        }
      }
      return true
    case '$lte':
      for (const queryKey in value) {
        if (item[queryKey] > value[queryKey]) {
          return false
        }
      }
      return true
    default:
      return false
  }
}
