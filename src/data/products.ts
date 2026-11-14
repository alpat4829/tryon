import celanaChino from '../assets/celana/Celana Chino Abu.webp'
import celanaGajah from '../assets/celana/celana gajah.webp'
import celanaJeansHitam from '../assets/celana/celana jeans hitam.webp'
import celanaJeansPanjang from '../assets/celana/Celana Jeans Panjang.webp'
import celanaJorge from '../assets/celana/celana jorge jeans.webp'
import celanaDailyWanita from '../assets/celana/Celana Panjang Daily Wanita.webp'
import celanaTrainingCocok from '../assets/celana/celana training cocok.webp'
import celanaTrainingHitam from '../assets/celana/celana training hitam.webp'
import jogerAbu from '../assets/celana/Joger Abu.webp'
import cargoHijau from '../assets/celana/long cargo hijau.webp'
import hoodieAbu from '../assets/Hoodie/Hoodie/abu.webp'
import hoodieBiru from '../assets/Hoodie/Hoodie/biru.webp'
import hoodieCoklat from '../assets/Hoodie/Hoodie/coklat.webp'
import hoodieHijau from '../assets/Hoodie/Hoodie/hijau.webp'
import hoodieHitam from '../assets/Hoodie/Hoodie/hitam.webp'
import hoodieKuning from '../assets/Hoodie/Hoodie/kuning.webp'
import hoodieMerah from '../assets/Hoodie/Hoodie/merah.webp'
import hoodiePink from '../assets/Hoodie/Hoodie/pink.webp'
import hoodiePutih from '../assets/Hoodie/Hoodie/putih.webp'
import hoodieUngu from '../assets/Hoodie/Hoodie/ungu.webp'
import jaketHujan from '../assets/Jaket/Jaket/jaket anti hujan.webp'
import jaketDenimHitam from '../assets/Jaket/Jaket/jaket denim hitam.webp'
import jaketDenim from '../assets/Jaket/Jaket/jaket denim.webp'
import jaketGelembung from '../assets/Jaket/Jaket/jaket gelembung.webp'
import jaketGunung from '../assets/Jaket/Jaket/jaket gunung.webp'
import jaketKulit from '../assets/Jaket/Jaket/jaket kulit.webp'
import jaketParasut from '../assets/Jaket/Jaket/jaket parasut.webp'
import jaketPutih from '../assets/Jaket/Jaket/jaket putih.webp'
import jaketNavy from '../assets/Jaket/Jaket/jaket smith navy.webp'
import jaketVarsity from '../assets/Jaket/Jaket/jaket varsity hitam putih.webp'
import kemejaOxford from '../assets/kemeja/Pria/01_pria_oxford_putih.png'
import kemejaFlanel from '../assets/kemeja/Pria/02_pria_flanel_merah_hitam.jpg'
import kemejaDenim from '../assets/kemeja/Pria/03_pria_denim_biru_tua.jpg'
import kemejaLinen from '../assets/kemeja/Pria/04_pria_linen_hijau_sage.jpg'
import kemejaGaris from '../assets/kemeja/Wanita/05_wanita_garis_pink_putih.jpg'
import kemejaSatin from '../assets/kemeja/Wanita/06_wanita_satin_beige.jpg'
import kemejaCrop from '../assets/kemeja/Wanita/07_wanita_cropped_lavender.jpg'
import type { Product } from '../components/ProductCard'

type CatalogProduct = Product & {
  gender: 'PRIA' | 'WANITA' | 'UNISEX'
}

const item = (name: string, category: string, price: string, image: string, gender: CatalogProduct['gender'], badge?: string): CatalogProduct => ({
  name,
  category: `${category} · ${gender}`,
  price,
  image,
  gender,
  ...(badge ? { badge } : {}),
})

export const products: CatalogProduct[] = [
  item('Celana Chino Abu', 'CELANA', 'Rp 459.000', celanaChino, 'PRIA'),
  item('Celana Gajah Relaxed', 'CELANA', 'Rp 499.000', celanaGajah, 'WANITA'),
  item('Celana Jeans Hitam', 'JEANS', 'Rp 579.000', celanaJeansHitam, 'UNISEX', 'BEST SELLER'),
  item('Celana Jeans Panjang', 'JEANS', 'Rp 599.000', celanaJeansPanjang, 'UNISEX'),
  item('Jorge Straight Jeans', 'JEANS', 'Rp 549.000', celanaJorge, 'PRIA'),
  item('Celana Panjang Daily', 'BAWAHAN', 'Rp 429.000', celanaDailyWanita, 'WANITA'),
  item('Celana Training Cocok', 'TRAINING', 'Rp 389.000', celanaTrainingCocok, 'UNISEX'),
  item('Celana Training Hitam', 'TRAINING', 'Rp 399.000', celanaTrainingHitam, 'UNISEX'),
  item('Joger Abu Essential', 'JOGGER', 'Rp 419.000', jogerAbu, 'PRIA'),
  item('Long Cargo Hijau', 'CARGO', 'Rp 529.000', cargoHijau, 'PRIA', 'TRENDING'),
  item('Hoodie Abu Basic', 'HOODIE', 'Rp 529.000', hoodieAbu, 'UNISEX'),
  item('Hoodie Biru Daily', 'HOODIE', 'Rp 549.000', hoodieBiru, 'UNISEX'),
  item('Hoodie Coklat Earthy', 'HOODIE', 'Rp 579.000', hoodieCoklat, 'UNISEX'),
  item('Hoodie Hijau Olive', 'HOODIE', 'Rp 599.000', hoodieHijau, 'PRIA', 'AI REKOMENDASI'),
  item('Hoodie Hitam Essential', 'HOODIE', 'Rp 569.000', hoodieHitam, 'UNISEX'),
  item('Hoodie Kuning Bright', 'HOODIE', 'Rp 539.000', hoodieKuning, 'UNISEX'),
  item('Hoodie Merah Bold', 'HOODIE', 'Rp 559.000', hoodieMerah, 'UNISEX'),
  item('Hoodie Pink Soft', 'HOODIE', 'Rp 549.000', hoodiePink, 'WANITA'),
  item('Hoodie Putih Clean', 'HOODIE', 'Rp 529.000', hoodiePutih, 'UNISEX'),
  item('Hoodie Ungu Modern', 'HOODIE', 'Rp 559.000', hoodieUngu, 'WANITA'),
  item('Jaket Anti Hujan', 'JAKET', 'Rp 749.000', jaketHujan, 'UNISEX'),
  item('Jaket Denim Hitam', 'JAKET', 'Rp 699.000', jaketDenimHitam, 'PRIA'),
  item('Jaket Denim Classic', 'JAKET', 'Rp 679.000', jaketDenim, 'UNISEX'),
  item('Jaket Gelembung Puffer', 'JAKET', 'Rp 899.000', jaketGelembung, 'UNISEX'),
  item('Jaket Gunung Outdoor', 'JAKET', 'Rp 829.000', jaketGunung, 'PRIA'),
  item('Jaket Kulit Classic', 'JAKET', 'Rp 1.099.000', jaketKulit, 'PRIA'),
  item('Jaket Parasut Ringan', 'JAKET', 'Rp 649.000', jaketParasut, 'UNISEX'),
  item('Jaket Putih Minimal', 'JAKET', 'Rp 699.000', jaketPutih, 'WANITA'),
  item('Jaket Smith Navy', 'JAKET', 'Rp 729.000', jaketNavy, 'PRIA'),
  item('Jaket Varsity Hitam Putih', 'JAKET', 'Rp 779.000', jaketVarsity, 'UNISEX', 'RILIS BARU'),
  item('Kemeja Oxford Putih', 'KEMEJA', 'Rp 489.000', kemejaOxford, 'PRIA'),
  item('Kemeja Flanel Merah Hitam', 'KEMEJA', 'Rp 529.000', kemejaFlanel, 'PRIA'),
  item('Kemeja Denim Biru Tua', 'KEMEJA', 'Rp 559.000', kemejaDenim, 'PRIA'),
  item('Kemeja Linen Hijau Sage', 'KEMEJA', 'Rp 579.000', kemejaLinen, 'PRIA', 'AI REKOMENDASI'),
  item('Kemeja Garis Pink Putih', 'KEMEJA', 'Rp 499.000', kemejaGaris, 'WANITA'),
  item('Kemeja Satin Beige', 'KEMEJA', 'Rp 649.000', kemejaSatin, 'WANITA'),
  item('Kemeja Crop Lavender', 'KEMEJA', 'Rp 539.000', kemejaCrop, 'WANITA'),
]
