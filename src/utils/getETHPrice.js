export async function getETHPrice() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    const data = await res.json()
    return data.ethereum.usd
  } catch (error) {
    console.error('ETH fiyatı alınamadı:', error)
    return null
  }
} 