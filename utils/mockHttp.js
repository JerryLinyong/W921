export default function delayedPromise(value = {}, ms = 0) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}
