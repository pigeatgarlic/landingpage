async function delete_cache(){
  const thinkmay_cache = await caches.keys() 
  if(thinkmay_cache.length > 0 && thinkmay_cache[0].includes('thinkmay.net') == true){
    caches.delete(thinkmay_cache[0])
    location.reload()
  }
}
delete_cache().then(() => {console.log('delete cached')})