/* =============================================
   ELITE ELECTRONICS – PRODUCTS DATA
   Correct category-specific images for every product
   ============================================= */

// ── IMAGE POOLS ─────────────────────────────────────────────────────────────
// Each category has its own set of curated, accurate Unsplash images
const IMG = {
  ac: [
    'images/ac/ac1.jpg',
    'images/ac/ac2.jpg',
    'images/ac/ac3.jpg',
    'images/ac/ac4.jpg',
    'images/ac/ac5.jpg',
  ],
  cooler: [
    'images/cooler/cooler1.jpg',
    'images/cooler/cooler2.jpg',
    'images/cooler/cooler3.jpg',
  ],
  fan: [
    'images/fan/fan1.jpg',
    'images/fan/fan2.jpg',
    'images/fan/fan3.jpg',
  ],
  fridge: [
    'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&q=85&auto=format&fit=crop',
  ],
  washer: [
    'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500&q=85&auto=format&fit=crop',
  ],
  tv: [
    'images/tv/tv1.jpg',
    'images/tv/tv2.jpg',
    'images/tv/tv3.jpg',
    'images/tv/tv4.jpg',
    'images/tv/tv5.jpg',
  ],
  soundbar: [
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=85&auto=format&fit=crop',
  ],
  speaker: [
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=85&auto=format&fit=crop',
  ],
  projector: [
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=85&auto=format&fit=crop',
  ],
  laptop: [
    'images/laptop/laptop1.jpg',
    'images/laptop/laptop2.jpg',
    'images/laptop/laptop3.jpg',
    'images/laptop/laptop4.jpg',
    'images/laptop/laptop5.jpg',
  ],
  desktop: [
    'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=85&auto=format&fit=crop',
  ],
  monitor: [
    'https://images.unsplash.com/photo-1527443224154-c4a573d18526?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&q=85&auto=format&fit=crop',
  ],
  printer: [
    'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=85&auto=format&fit=crop',
  ],
  smartphone: [
    'images/mobile/mobile1.jpg',
    'images/mobile/mobile2.jpg',
    'images/mobile/mobile3.jpg',
    'images/mobile/mobile4.jpg',
    'images/mobile/mobile5.jpg',
  ],
  tablet: [
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1632516643720-287d0b0d4f57?w=500&q=85&auto=format&fit=crop',
  ],
  earphone: [
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=85&auto=format&fit=crop',
  ],
  powerbank: [
    'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=85&auto=format&fit=crop',
  ],
  smartwatch: [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=85&auto=format&fit=crop',
  ],
  cctv: [
    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=85&auto=format&fit=crop',
  ],
  smartbulb: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&q=85&auto=format&fit=crop',
  ],
  doorbell: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85&auto=format&fit=crop',
  ],
};

// Fallback remote images (reliable Unsplash URLs per category)
const REMOTE_IMG = {
  ac:         'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=85&auto=format&fit=crop',
  cooler:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85&auto=format&fit=crop',
  fan:        'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=85&auto=format&fit=crop',
  fridge:     'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&q=85&auto=format&fit=crop',
  washer:     'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=85&auto=format&fit=crop',
  tv:         'https://images.unsplash.com/photo-1593359677879-a4bb92f4834e?w=500&q=85&auto=format&fit=crop',
  soundbar:   'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=85&auto=format&fit=crop',
  speaker:    'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=85&auto=format&fit=crop',
  projector:  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=85&auto=format&fit=crop',
  laptop:     'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=85&auto=format&fit=crop',
  desktop:    'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&q=85&auto=format&fit=crop',
  monitor:    'https://images.unsplash.com/photo-1527443224154-c4a573d18526?w=500&q=85&auto=format&fit=crop',
  printer:    'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=85&auto=format&fit=crop',
  smartphone: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=85&auto=format&fit=crop',
  tablet:     'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=85&auto=format&fit=crop',
  earphone:   'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=85&auto=format&fit=crop',
  powerbank:  'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=85&auto=format&fit=crop',
  smartwatch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=85&auto=format&fit=crop',
  cctv:       'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=85&auto=format&fit=crop',
  smartbulb:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85&auto=format&fit=crop',
  doorbell:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85&auto=format&fit=crop',
};

// Helper: return the correct image URL for a category + index
function catImg(cat, idx) {
  return REMOTE_IMG[cat] || REMOTE_IMG['tv'];
}

// ── PRODUCT CATALOGUE ────────────────────────────────────────────────────────
const PRODUCTS = [

  // ===== AIR CONDITIONERS (AC images only) =====
  { id:1,  name:'Samsung Wind-Free 1.5T Inverter AC',   brand:'Samsung',   cat:'ac', group:'appliances', price:38999, originalPrice:58999, discount:33, rating:4.8, reviews:2140,
    img:'https://freepngimg.com/save/9196-ac-picture/600x600', badge:'Best Seller' },
  { id:2,  name:'LG Dual Inverter AC 1.5T 5-Star',      brand:'LG',        cat:'ac', group:'appliances', price:34999, originalPrice:52999, discount:33, rating:4.7, reviews:1820,
    img:'https://png.pngtree.com/png-clipart/20241109/original/pngtree-air-conditioner-illustration-on-white-transparent-background-png-image_16795477.png' },
  { id:3,  name:'Daikin 5-Star Inverter Split AC 2T',   brand:'Daikin',    cat:'ac', group:'appliances', price:47999, originalPrice:65999, discount:27, rating:4.9, reviews:980,
    img:'https://i.pinimg.com/736x/42/2a/a1/422aa1520760c530804a7d6f148871eb.jpg', badge:'Top Rated' },
  { id:4,  name:'Voltas Adjustable Inverter AC 1.5T',   brand:'Voltas',    cat:'ac', group:'appliances', price:29999, originalPrice:42999, discount:30, rating:4.5, reviews:1340,
    img:'https://img.freepik.com/premium-psd/air-conditioner-isolated-transparent-background_1092965-1471.jpg?semt=ais_hybrid&w=740&q=80' },
  { id:5,  name:'Panasonic EtioS Inverter AC 1.5T',     brand:'Panasonic', cat:'ac', group:'appliances', price:33499, originalPrice:48000, discount:30, rating:4.6, reviews:760,
    img:'https://5.imimg.com/data5/SELLER/Default/2021/8/PW/EW/XN/117662077/a-c-installation.jpg' },
    { id:6,  name:'Hitachi 2-Ton 5-Star Inverter AC',     brand:'Hitachi',   cat:'ac', group:'appliances', price:52999, originalPrice:71999, discount:26, rating:4.7, reviews:540,
    img:'https://static.vecteezy.com/system/resources/thumbnails/070/679/025/small/modern-air-conditioner-unit-mounted-on-building-exterior-with-blue-sky-background-photo.jpeg' },
    { id:6,  name:'Hitachi 2-Ton 5-Star Inverter AC',     brand:'Hitachi',   cat:'ac', group:'appliances', price:52999, originalPrice:71999, discount:26, rating:4.7, reviews:540,
    img:'https://5.imimg.com/data5/IO/SX/MY-76155088/whirlpool-1-ton-split-ac-3-d-cool-snow-white-500x500.jpg' },
    { id:6,  name:'Hitachi 2-Ton 5-Star Inverter AC',     brand:'Hitachi',   cat:'ac', group:'appliances', price:52999, originalPrice:71999, discount:26, rating:4.7, reviews:540,
    img:'https://ilayacoolservices.com/wp-content/uploads/2025/07/ac4.jpg' },
    

  // ===== AIR COOLERS (cooler images only) =====
  { id:7,  name:'Symphony Diet 50i Desert Cooler',      brand:'Symphony',  cat:'cooler', group:'appliances', price:8499, originalPrice:11999, discount:29, rating:4.6, reviews:3200,
    img:'https://5.imimg.com/data5/SELLER/Default/2023/4/300990108/LR/AE/RC/82815101/71qnv6p86xl-sl1500--500x500.jpg', badge:'Hot Deal' },
  { id:10, name:'Havells Freddo 70L Tower Cooler',      brand:'Havells',   cat:'cooler', group:'appliances', price:9999, originalPrice:13999, discount:28, rating:4.6, reviews:670,
    img:'https://m.media-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_1164477_hotw_fan_cooler_420x420_Kitchen_XCM_Manual_1164477_in_kitchen_hotw_fan_cooler_19_420x420_6_1554790145_jpg.jpg' },
{ id:10, name:'Havells Freddo 70L Tower Cooler',      brand:'Havells',   cat:'cooler', group:'appliances', price:9999, originalPrice:13999, discount:28, rating:4.6, reviews:670,
    img:'https://www.intex.in/cdn/shop/articles/Only-cooler.png?v=1712409051' },

  { id:10, name:'Havells Freddo 70L Tower Cooler',      brand:'Havells',   cat:'cooler', group:'appliances', price:9999, originalPrice:13999, discount:28, rating:4.6, reviews:670,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmFSwGHNUuDAX5FtKqSE4OxDZnr5lH32vQQ&s' },
    { id:10, name:'Havells Freddo 70L Tower Cooler',      brand:'Havells',   cat:'cooler', group:'appliances', price:9999, originalPrice:13999, discount:28, rating:4.6, reviews:670,
    img:'https://e7.pngegg.com/pngimages/703/691/png-clipart-evaporative-cooler-havells-india-price-india-india-world.png' },

    { id:10, name:'Havells Freddo 70L Tower Cooler',      brand:'Havells',   cat:'cooler', group:'appliances', price:9999, originalPrice:13999, discount:28, rating:4.6, reviews:670,
    img:'https://moonair.in/wp-content/uploads/2023/01/61aUDB7OObL._SX522_.jpg' },

    { id:10, name:'Havells Freddo 70L Tower Cooler',      brand:'Havells',   cat:'cooler', group:'appliances', price:9999, originalPrice:13999, discount:28, rating:4.6, reviews:670,
    img:'https://cdn.moglix.com/p/J/H/5/d/MINJH5FBIGFD0-xxlarge.jpg' },

    { id:10, name:'Havells Freddo 70L Tower Cooler',      brand:'Havells',   cat:'cooler', group:'appliances', price:9999, originalPrice:13999, discount:28, rating:4.6, reviews:670,
    img:'https://cdn.moglix.com/p/peildUfs29pTt-xxlarge.jpg' },


  // ===== FANS (fan images only) =====
  { id:11, name:'Atomberg Renesa BLDC Ceiling Fan',     brand:'Atomberg',  cat:'fan', group:'appliances', price:2799, originalPrice:3499, discount:20, rating:4.8, reviews:5600,
    img:'https://img.freepik.com/free-photo/ceiling-fan-decoration-interior-room_74190-8490.jpg', badge:'Best Seller' },
  { id:12, name:'Havells Fusion BLDC Fan 1200mm',       brand:'Havells',   cat:'fan', group:'appliances', price:3299, originalPrice:4199, discount:21, rating:4.7, reviews:2340,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPPkzok5yRZISk836xgTplIdj2U4oNExQAA&s' },
   { id:14, name:'Orient Aeroquiet Tower Fan',           brand:'Orient',    cat:'fan', group:'appliances', price:4499, originalPrice:5999, discount:25, rating:4.5, reviews:870,
    img:'https://5.imimg.com/data5/SELLER/Default/2023/5/310531641/YB/VD/WN/144188139/polar-ceiling-fan.png' },
  { id:14, name:'Orient Aeroquiet Tower Fan',           brand:'Orient',    cat:'fan', group:'appliances', price:4499, originalPrice:5999, discount:25, rating:4.5, reviews:870,
    img:'https://cpimg.tistatic.com/05909376/b/4/BLDC-Ceiling-Fan.png' },
    { id:11, name:'Atomberg Renesa BLDC Ceiling Fan',     brand:'Atomberg',  cat:'fan', group:'appliances', price:2799, originalPrice:3499, discount:20, rating:4.8, reviews:5600,
    img:'https://t3.ftcdn.net/jpg/13/73/69/64/360_F_1373696423_sDxMN1VGRS3xmLQtRcKDKJ5wSBULn8yb.jpg', badge:'Best Seller' },
  { id:12, name:'Havells Fusion BLDC Fan 1200mm',       brand:'Havells',   cat:'fan', group:'appliances', price:3299, originalPrice:4199, discount:21, rating:4.7, reviews:2340,
    img:'https://img.freepik.com/premium-photo/red-electric-fan-three-dimensional-model-white-background-fan-with-control-buttons-stand-simple-device-air-ventilation-3d-illustration_101266-6206.jpg' },
   { id:14, name:'Orient Aeroquiet Tower Fan',           brand:'Orient',    cat:'fan', group:'appliances', price:4499, originalPrice:5999, discount:25, rating:4.5, reviews:870,
    img:'https://png.pngtree.com/png-clipart/20240318/original/pngtree-3d-illustration-electric-standing-fan-png-image_14617885.png' },
  { id:14, name:'Orient Aeroquiet Tower Fan',           brand:'Orient',    cat:'fan', group:'appliances', price:4499, originalPrice:5999, discount:25, rating:4.5, reviews:870,
    img:'https://www.shopatorion.com/admin/productimage/Impex%20Wall%20Fan%20Zolo%2016%20Yellow%20Black.jpg' },

  // ===== REFRIGERATORS =====
  { id:15, name:'Samsung 265L Frost Free Fridge',       brand:'Samsung',   cat:'fridge', group:'appliances', price:26999, originalPrice:37999, discount:28, rating:4.7, reviews:3450,
    img:'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&q=85&auto=format&fit=crop', badge:'Best Seller' },
  { id:16, name:'LG 190L 5-Star Direct Cool Fridge',    brand:'LG',        cat:'fridge', group:'appliances', price:16499, originalPrice:22999, discount:28, rating:4.6, reviews:2100,
    img:'https://img.freepik.com/free-psd/sleek-stainless-steel-french-door-refrigerator_632498-25861.jpg' },
  { id:17, name:'Whirlpool 340L Double Door Fridge',    brand:'Whirlpool', cat:'fridge', group:'appliances', price:29999, originalPrice:41999, discount:28, rating:4.5, reviews:980,
    img:'https://m.media-amazon.com/images/I/51O29bgRQVL._AC_UF1000,1000_QL80_.jpg' },
    { id:16, name:'LG 190L 5-Star Direct Cool Fridge',    brand:'LG',        cat:'fridge', group:'appliances', price:16499, originalPrice:22999, discount:28, rating:4.6, reviews:2100,
    img:'https://kaydeeelectronics.in/cdn/shop/files/untitled-design-59-66e410cc229bf.webp?v=1726222584&width=1946' },
    { id:16, name:'LG 190L 5-Star Direct Cool Fridge',    brand:'LG',        cat:'fridge', group:'appliances', price:16499, originalPrice:22999, discount:28, rating:4.6, reviews:2100,
    img:'https://electronicparadise.in/cdn/shop/files/LG_REF_GR-H812HLHM_9.jpg?v=1728896327&width=1406' },
    { id:16, name:'LG 190L 5-Star Direct Cool Fridge',    brand:'LG',        cat:'fridge', group:'appliances', price:16499, originalPrice:22999, discount:28, rating:4.6, reviews:2100,
    img:'https://5.imimg.com/data5/SELLER/Default/2023/2/JV/BQ/AY/160550520/haier-french-door-refrigerator-500x500.png' },
    { id:16, name:'LG 190L 5-Star Direct Cool Fridge',    brand:'LG',        cat:'fridge', group:'appliances', price:16499, originalPrice:22999, discount:28, rating:4.6, reviews:2100,
    img:'https://riddhidisplay.com/wp-content/webp-express/webp-images/uploads/2022/04/image_2022_04_18T10_40_57_769Z-e1655793084505.png.webp' },
    { id:16, name:'LG 190L 5-Star Direct Cool Fridge',    brand:'LG',        cat:'fridge', group:'appliances', price:16499, originalPrice:22999, discount:28, rating:4.6, reviews:2100,
    img:'https://mobileimages.lowes.com/productimages/cd36f4bd-6c75-424b-8418-a7f29f68e67b/64449017.jpg?size=pdhism' },

  // ===== WASHING MACHINES =====
  { id:18, name:'Samsung 7kg Front Load Washer',        brand:'Samsung',   cat:'washer', group:'appliances', price:29999, originalPrice:42999, discount:30, rating:4.7, reviews:1870,
    img:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=85&auto=format&fit=crop', badge:'Hot Deal' },
  { id:19, name:'LG 8kg AI Direct Drive Washer',        brand:'LG',        cat:'washer', group:'appliances', price:35999, originalPrice:49999, discount:28, rating:4.8, reviews:1240,
    img:'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500&q=85&auto=format&fit=crop' },
    { id:18, name:'Samsung 7kg Front Load Washer',        brand:'Samsung',   cat:'washer', group:'appliances', price:29999, originalPrice:42999, discount:30, rating:4.7, reviews:1870,
    img:'https://img.favpng.com/19/15/6/washing-machine-haier-home-appliance-png-favpng-mVtjzDev7t0U20gpJMuj43mcJ.jpg', badge:'Hot Deal' },
  { id:19, name:'LG 8kg AI Direct Drive Washer',        brand:'LG',        cat:'washer', group:'appliances', price:35999, originalPrice:49999, discount:28, rating:4.8, reviews:1240,
    img:'https://m.media-amazon.com/images/I/71rAKmShzzL._AC_UF350,350_QL80_.jpg' },

  // ===== TELEVISIONS (TV images only) =====
  { id:20, name:'Samsung 55" QLED 4K Smart TV',         brand:'Samsung',   cat:'tv', group:'entertainment', price:59999, originalPrice:84999, discount:29, rating:4.9, reviews:4560,
    img:'https://rukminim2.flixcart.com/image/480/640/xif0q/television/n/2/k/-original-imah44cqv9nufurf.jpeg?q=90', badge:'Best Seller' },
  { id:21, name:'LG 55" OLED evo C3 Smart TV',          brand:'LG',        cat:'tv', group:'entertainment', price:84999, originalPrice:124999, discount:32, rating:4.9, reviews:2890,
    img:'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/274582_0_nlmr1l.png', badge:'Premium' },
  { id:22, name:'Sony Bravia 50" 4K XR Smart TV',       brand:'Sony',      cat:'tv', group:'entertainment', price:64999, originalPrice:89999, discount:27, rating:4.8, reviews:1780,
    img:'https://sahuagencies.com/wp-content/uploads/2021/10/1-1.jpg' },
  { id:23, name:'Xiaomi Smart TV 5X 55" 4K',            brand:'Xiaomi',    cat:'tv', group:'entertainment', price:39999, originalPrice:54999, discount:27, rating:4.5, reviews:6700,
    img:'https://rukminim2.flixcart.com/image/480/640/xif0q/television/3/o/6/l43m8-a2in-mi-original-imah2pggfdgyvhpm.jpeg?q=90', badge:'Value Pick' },
  { id:24, name:'Panasonic 43" 4K LED Smart TV',        brand:'Panasonic', cat:'tv', group:'entertainment', price:28999, originalPrice:39999, discount:27, rating:4.4, reviews:890,
    img:'https://vsprod.vijaysales.com/media/catalog/product/2/4/244764_1_.jpg?optimize=medium&fit=bounds&height=500&width=500' },
  { id:24, name:'Panasonic 43" 4K LED Smart TV',        brand:'Panasonic', cat:'tv', group:'entertainment', price:28999, originalPrice:39999, discount:27, rating:4.4, reviews:890,
    img:'https://m.media-amazon.com/images/I/6148eGyRCwL.jpg' },
    { id:24, name:'Panasonic 43" 4K LED Smart TV',        brand:'Panasonic', cat:'tv', group:'entertainment', price:28999, originalPrice:39999, discount:27, rating:4.4, reviews:890,
    img:'https://5.imimg.com/data5/SELLER/Default/2025/3/494292861/PV/HP/KP/61605097/panasonic-led-tv.jpg' },
    { id:24, name:'Panasonic 43" 4K LED Smart TV',        brand:'Panasonic', cat:'tv', group:'entertainment', price:28999, originalPrice:39999, discount:27, rating:4.4, reviews:890,
    img:'https://jamesandco.in/wp-content/uploads/2025/09/pan-1.png' },
    

  // ===== SOUNDBARS & SPEAKERS =====
  { id:26, name:'Sony HT-S40R 5.1 Soundbar',            brand:'Sony',      cat:'soundbar', group:'entertainment', price:15999, originalPrice:22999, discount:30, rating:4.7, reviews:1230,
    img:'https://www.techhive.com/wp-content/uploads/2023/04/Sony-HT-A3000-main-1.jpeg?quality=50&strip=all&w=1024' },
    { id:26, name:'Sony HT-S40R 5.1 Soundbar',            brand:'Sony',      cat:'soundbar', group:'entertainment', price:15999, originalPrice:22999, discount:30, rating:4.7, reviews:1230,
    img:'https://img-prd-pim.poorvika.com/product/Sony-5-1-Channel-400W-Home-Cinema-Sound-Bar-System-HT-S20R-01.png' },
    { id:26, name:'Sony HT-S40R 5.1 Soundbar',            brand:'Sony',      cat:'soundbar', group:'entertainment', price:15999, originalPrice:22999, discount:30, rating:4.7, reviews:1230,
    img:'https://i.rtings.com/assets/pages/b0xS2erY/best-sony-20251010-medium.jpg?format=auto' },
  { id:27, name:'Samsung HW-Q800B Dolby Atmos',         brand:'Samsung',   cat:'soundbar', group:'entertainment', price:39999, originalPrice:56999, discount:29, rating:4.8, reviews:670,
    img:'https://i5.walmartimages.com/seo/Sony-HT-A7000-7-1-2-Dolby-Atmos-Soundbar-with-300W-Wireless-Subwoofer-Bundle_d51f3314-dff0-423d-957b-522d3830460c.28f746bf1e1b6e2831018c3025e18993.jpeg', badge:'Dolby Atmos' },
   { id:29, name:'Bose SoundLink Flex BT Speaker',       brand:'Bose',      cat:'speaker', group:'entertainment', price:11990, originalPrice:15999, discount:25, rating:4.8, reviews:1230,
    img:'https://png.pngtree.com/thumb_back/fh260/background/20230928/pngtree-mesmerizing-3d-illustration-violet-illuminated-blue-speaker-system-against-a-blue-image_13515958.png' },
  { id:29, name:'Bose SoundLink Flex BT Speaker',       brand:'Bose',      cat:'speaker', group:'entertainment', price:11990, originalPrice:15999, discount:25, rating:4.8, reviews:1230,
    img:'https://static.vecteezy.com/system/resources/thumbnails/047/536/153/small/a-music-speaker-with-colored-lighting-stands-on-the-floor-in-the-dark-generated-by-artificial-intelligence-free-photo.jpg' },
    { id:29, name:'Bose SoundLink Flex BT Speaker',       brand:'Bose',      cat:'speaker', group:'entertainment', price:11990, originalPrice:15999, discount:25, rating:4.8, reviews:1230,
    img:'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?cs=srgb&dl=pexels-marinko-krsmanovic-700471-2651794.jpg&fm=jpg' },
    { id:29, name:'Bose SoundLink Flex BT Speaker',       brand:'Bose',      cat:'speaker', group:'entertainment', price:11990, originalPrice:15999, discount:25, rating:4.8, reviews:1230,
    img:'https://png.pngtree.com/element_pic/16/12/08/2cbced4253bfc8967e1373302f5a4362.png' },

  // ===== PROJECTORS =====
  { id:30, name:'Epson EH-TW750 4K Projector',          brand:'Epson',     cat:'projector', group:'entertainment', price:64999, originalPrice:84999, discount:23, rating:4.7, reviews:340,
    img:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=85&auto=format&fit=crop' },
    { id:30, name:'Epson EH-TW750 4K Projector',          brand:'Epson',     cat:'projector', group:'entertainment', price:64999, originalPrice:84999, discount:23, rating:4.7, reviews:340,
    img:'https://thumbs.dreamstime.com/b/lcd-projectors-27747068.jpg' },
    { id:30, name:'Epson EH-TW750 4K Projector',          brand:'Epson',     cat:'projector', group:'entertainment', price:64999, originalPrice:84999, discount:23, rating:4.7, reviews:340,
    img:'https://img.freepik.com/premium-photo/adjusting-multimedia-projector-ceiling-bracket-home-theater-presentations_1007204-33804.jpg?semt=ais_hybrid&w=740&q=80' },
    { id:30, name:'Epson EH-TW750 4K Projector',          brand:'Epson',     cat:'projector', group:'entertainment', price:64999, originalPrice:84999, discount:23, rating:4.7, reviews:340,
    img:'https://www.shutterstock.com/image-photo/projector-light-showing-260nw-1376510234.jpg' },

  // ===== LAPTOPS (laptop images only) =====
  { id:31, name:'Dell XPS 15 Core i7 RTX 4060',         brand:'Dell',      cat:'laptop', group:'computers', price:99999, originalPrice:134999, discount:25, rating:4.9, reviews:1890,
    img:'https://png.pngtree.com/png-vector/20250125/ourmid/pngtree-open-laptop-png-image_15332094.png', badge:'Top Rated' },
  { id:32, name:'HP Spectre x360 14" OLED Touch',        brand:'HP',        cat:'laptop', group:'computers', price:84999, originalPrice:114999, discount:26, rating:4.8, reviews:1120,
    img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=85&auto=format&fit=crop' },
  { id:33, name:'Lenovo ThinkPad X1 Carbon Gen 12',      brand:'Lenovo',    cat:'laptop', group:'computers', price:94999, originalPrice:124999, discount:24, rating:4.8, reviews:780,
    img:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=85&auto=format&fit=crop', badge:'Business' },
  { id:34, name:'Apple MacBook Air M3 13"',              brand:'Apple',     cat:'laptop', group:'computers', price:119900, originalPrice:149900, discount:20, rating:4.9, reviews:5600,
    img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=85&auto=format&fit=crop', badge:'New' },
  { id:35, name:'Asus ROG Strix G16 RTX 4070',           brand:'Asus',      cat:'laptop', group:'computers', price:109999, originalPrice:144999, discount:24, rating:4.7, reviews:890,
    img:'https://www.transparentpng.com/download/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png', badge:'Gaming' },
  { id:36, name:'Acer Aspire 7 Gaming i5 RTX',           brand:'Acer',      cat:'laptop', group:'computers', price:54999, originalPrice:74999, discount:26, rating:4.4, reviews:2340,
    img:'https://image.similarpng.com/file/similarpng/very-thumbnail/2021/08/Laptop-computer-with-white-screen-and-keyboard-on-transparent-background-PNG.png' },
    { id:36, name:'Acer Aspire 7 Gaming i5 RTX',           brand:'Acer',      cat:'laptop', group:'computers', price:54999, originalPrice:74999, discount:26, rating:4.4, reviews:2340,
    img:'https://i.pinimg.com/736x/9a/fc/31/9afc318c8a266b717c9e9e5e0817886d.jpg' },
    { id:36, name:'Acer Aspire 7 Gaming i5 RTX',           brand:'Acer',      cat:'laptop', group:'computers', price:54999, originalPrice:74999, discount:26, rating:4.4, reviews:2340,
    img:'https://png.pngtree.com/png-vector/20250522/ourmid/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_16345445.png' },

  // ===== DESKTOPS & MONITORS =====
  { id:37, name:'HP Pavilion i7 12th Gen Desktop',       brand:'HP',        cat:'desktop', group:'computers', price:64999, originalPrice:89999, discount:27, rating:4.6, reviews:560,
    img:'https://hp.widen.net/content/r8ga0cg2nr/png/r8ga0cg2nr.png?w=800&h=600&dpi=72&color=ffffff00' },
    { id:37, name:'HP Pavilion i7 12th Gen Desktop',       brand:'HP',        cat:'desktop', group:'computers', price:64999, originalPrice:89999, discount:27, rating:4.6, reviews:560,
    img:'https://5.imimg.com/data5/SELLER/Default/2024/10/456715505/AZ/DV/IY/186630948/hp-proone-440-g9-all-in-one-desktop-pc.jpg' },
    { id:37, name:'HP Pavilion i7 12th Gen Desktop',       brand:'HP',        cat:'desktop', group:'computers', price:64999, originalPrice:89999, discount:27, rating:4.6, reviews:560,
    img:'https://newjaisa.com/cdn/shop/files/HP400G5MicroToweri58th.svg?v=1774638461' },
    { id:37, name:'HP Pavilion i7 12th Gen Desktop',       brand:'HP',        cat:'desktop', group:'computers', price:64999, originalPrice:89999, discount:27, rating:4.6, reviews:560,
    img:'https://eazypc.in/wp-content/uploads/2025/08/AIO_Lenovo_desktop_M910s_i7_6th.svg' },
  { id:38, name:'LG UltraWide 27" 4K IPS Monitor',       brand:'LG',        cat:'monitor', group:'computers', price:22999, originalPrice:31999, discount:28, rating:4.7, reviews:1230,
    img:'https://dakauf.eu/wp-content/uploads/2024/09/LG-27MR400-B.AEUQ-computer-monitor-68.6-cm-27-1920-x-1080-pixels-Full-HD-LED-Black.png' },
  { id:39, name:'Samsung 27" Odyssey G5 165Hz',          brand:'Samsung',   cat:'monitor', group:'computers', price:18999, originalPrice:26999, discount:29, rating:4.6, reviews:870,
    img:'https://geon.com.my/wp-content/uploads/2022/10/Monitor-28-1.png' },
    { id:38, name:'LG UltraWide 27" 4K IPS Monitor',       brand:'LG',        cat:'monitor', group:'computers', price:22999, originalPrice:31999, discount:28, rating:4.7, reviews:1230,
    img:'https://www.designinfo.in/wp-content/uploads/2023/07/lg-29wl50s-29-inch-full-hd-1.webp' },
    { id:39, name:'Samsung 27" Odyssey G5 165Hz',          brand:'Samsung',   cat:'monitor', group:'computers', price:18999, originalPrice:26999, discount:29, rating:4.6, reviews:870,
    img:'https://i.ytimg.com/vi/2pFQUyKM-Ns/sddefault.jpg' },

  // ===== SMARTPHONES (mobile images only) =====
  { id:40, name:'Samsung Galaxy S24 Ultra 256GB',        brand:'Samsung',   cat:'smartphone', group:'mobiles', price:129999, originalPrice:154999, discount:16, rating:4.9, reviews:8900,
    img:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=85&auto=format&fit=crop', badge:'Best Seller' },
  { id:41, name:'Apple iPhone 15 Pro Max 256GB',         brand:'Apple',     cat:'smartphone', group:'mobiles', price:159900, originalPrice:174900, discount:8, rating:4.9, reviews:12400,
    img:'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&q=85&auto=format&fit=crop', badge:'Premium' },
  { id:42, name:'OnePlus 12 5G 256GB Silky Black',       brand:'OnePlus',   cat:'smartphone', group:'mobiles', price:64999, originalPrice:84999, discount:23, rating:4.7, reviews:6700,
    img:'https://candytech.in/wp-content/uploads/2021/03/Redmi-Note-10-Pro.jpg' },
  { id:43, name:'Xiaomi 14 Pro 5G 512GB',                brand:'Xiaomi',    cat:'smartphone', group:'mobiles', price:59999, originalPrice:79999, discount:25, rating:4.6, reviews:4560,
    img:'https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-latest-model-mobile-phone-png-image_15739741.png', badge:'Value Pick' },
  { id:44, name:'Google Pixel 8 Pro 128GB',              brand:'Google',    cat:'smartphone', group:'mobiles', price:84999, originalPrice:109999, discount:22, rating:4.8, reviews:2340,
    img:'https://m.media-amazon.com/images/I/61SEbQm6zUL.jpg' },
  { id:45, name:'Vivo X100 Pro 5G 256GB',                brand:'Vivo',      cat:'smartphone', group:'mobiles', price:54999, originalPrice:74999, discount:26, rating:4.6, reviews:1890,
    img:'https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/311905_0_jie7jx.png' },
    { id:45, name:'Vivo X100 Pro 5G 256GB',                brand:'Vivo',      cat:'smartphone', group:'mobiles', price:54999, originalPrice:74999, discount:26, rating:4.6, reviews:1890,
    img:'https://images.fonearena.com/blog/wp-content/uploads/2018/09/Vivo-V11-3.jpg' },
    { id:45, name:'Vivo X100 Pro 5G 256GB',                brand:'Vivo',      cat:'smartphone', group:'mobiles', price:54999, originalPrice:74999, discount:26, rating:4.6, reviews:1890,
    img:'https://thepatriot.in/wp-content/uploads/2025/01/Vivo.jpg' },

  // ===== TABLETS =====
  { id:46, name:'Samsung Galaxy Tab S9 128GB',           brand:'Samsung',   cat:'tablet', group:'mobiles', price:68999, originalPrice:85999, discount:19, rating:4.8, reviews:2100,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrRMZOLkmk-MI2oaAOr1Fu2JsESJvw4WnlA&s', badge:'Best Seller' },
  { id:47, name:'Apple iPad Air 11" M2 256GB',           brand:'Apple',     cat:'tablet', group:'mobiles', price:74900, originalPrice:89900, discount:16, rating:4.9, reviews:3400,
    img:'https://images.unsplash.com/photo-1585790051609-09928c362a42?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGFkJTIwcHJvfGVufDB8fDB8fHww' },
    { id:46, name:'Samsung Galaxy Tab S9 128GB',           brand:'Samsung',   cat:'tablet', group:'mobiles', price:68999, originalPrice:85999, discount:19, rating:4.8, reviews:2100,
    img:'https://newworld.co.za/cdn/shop/files/108025620_7_55d6b42cb359756d4845902a9da98397.webp?v=1750327063', badge:'Best Seller' },
     { id:47, name:'Apple iPad Air 11" M2 256GB',           brand:'Apple',     cat:'tablet', group:'mobiles', price:74900, originalPrice:89900, discount:16, rating:4.9, reviews:3400,
    img:'https://i5.walmartimages.com/asr/64284c58-fafa-4545-b519-36dfb9107125.fa58db130d684b02c620efa05c706a73.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },

  // ===== EARPHONES =====
  { id:48, name:'Apple AirPods Pro 2nd Gen',             brand:'Apple',     cat:'earphone', group:'mobiles', price:24900, originalPrice:29900, discount:16, rating:4.9, reviews:8900,
    img:'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&q=85&auto=format&fit=crop', badge:'Best Seller' },
  { id:49, name:'Sony WH-1000XM5 Wireless',              brand:'Sony',      cat:'earphone', group:'mobiles', price:24990, originalPrice:34990, discount:28, rating:4.8, reviews:4560,
    img:'https://www.bigw.com.au/medias/sys_master/images/images/h55/h36/118900899348510.jpg' },
  { id:50, name:'boAt Airdopes 141 TWS Earbuds',         brand:'boAt',      cat:'earphone', group:'mobiles', price:1299, originalPrice:3499, discount:62, rating:4.3, reviews:25600,
    img:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=85&auto=format&fit=crop', badge:'Budget Pick' },
    { id:50, name:'boAt Airdopes 141 TWS Earbuds',         brand:'boAt',      cat:'earphone', group:'mobiles', price:1299, originalPrice:3499, discount:62, rating:4.3, reviews:25600,
    img:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=85&auto=format&fit=crop', badge:'Budget Pick' },

  // ===== POWER BANKS =====
  { id:51, name:'Xiaomi 20000mAh Pro 67W Power Bank',    brand:'Xiaomi',    cat:'powerbank', group:'mobiles', price:2499, originalPrice:3499, discount:28, rating:4.7, reviews:12400,
    img:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=85&auto=format&fit=crop' },

  // ===== SMART WATCHES =====
  { id:52, name:'Apple Watch Series 9 GPS 41mm',         brand:'Apple',     cat:'smartwatch', group:'smart', price:41900, originalPrice:44900, discount:6, rating:4.9, reviews:6700,
    img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=85&auto=format&fit=crop', badge:'New' },
  { id:53, name:'Samsung Galaxy Watch 6 Classic',        brand:'Samsung',   cat:'smartwatch', group:'smart', price:34999, originalPrice:44999, discount:22, rating:4.7, reviews:2890,
    img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=85&auto=format&fit=crop' },
  { id:54, name:'Noise ColorFit Pro 5 Smart Watch',      brand:'Noise',     cat:'smartwatch', group:'smart', price:3999, originalPrice:8999, discount:55, rating:4.3, reviews:31200,
    img:'https://www.jiomart.com/images/product/original/494268394/noise-colorfit-pro-5-smartwatch-elite-rose-gold-digital-o494268394-p606318970-1-202602091403.jpeg?im=Resize=(1000,1000)', badge:'Budget' },

  // ===== CCTV =====
  { id:55, name:'CP Plus 4MP Full HD CCTV Camera',       brand:'CP Plus',   cat:'cctv', group:'smart', price:1999, originalPrice:2999, discount:33, rating:4.5, reviews:3400,
    img:'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=85&auto=format&fit=crop' },
  { id:56, name:'Hikvision 4MP ColorVu Camera',          brand:'Hikvision', cat:'cctv', group:'smart', price:4999, originalPrice:7999, discount:37, rating:4.7, reviews:1230,
    img:'https://brandiinnovation.com/wp-content/uploads/2023/07/HIKVISION-2MP-4-mm-ColorVu-Lite-Fixed-Bullet-Network-Camera-DS-2CD1027G2-L.jpg', badge:'Night Color' },

  // ===== SMART BULBS =====
  { id:57, name:'Philips Hue White & Color 4-Pack',      brand:'Philips',   cat:'smartbulb', group:'smart', price:4999, originalPrice:6999, discount:28, rating:4.7, reviews:4560,
    img:'https://m.media-amazon.com/images/I/71yDe7OnJqL.jpg' },
  { id:58, name:'Syska 9W Smart LED Bulb Pack 3',        brand:'Syska',     cat:'smartbulb', group:'smart', price:1299, originalPrice:1999, discount:35, rating:4.4, reviews:8900,
    img:'https://www.jiomart.com/images/product/original/rvxyeylepg/syska-standard-b22-white-led-bulb-9w-pack-of-3-product-images-orvxyeylepg-p590960129-0-202212141835.png?im=Resize=(1000,1000)', badge:'Value Pack' },

  // ===== VIDEO DOORBELLS =====
  { id:59, name:'Ring Video Doorbell 4 Wi-Fi',           brand:'Ring',      cat:'doorbell', group:'smart', price:8999, originalPrice:12999, discount:30, rating:4.6, reviews:1890,
    img:'https://sa-en.ring.com/cdn/shop/products/ring_video_doorbell_4_1500x1500_91e4ba0c-a37e-437d-a474-3ad4b6c8b50f_1024x1024@2x.jpg?v=1632232097' },

  // ===== PRINTERS =====
  { id:60, name:'HP DeskJet 2776 All-in-One Printer',    brand:'HP',        cat:'printer', group:'computers', price:3999, originalPrice:5999, discount:33, rating:4.4, reviews:2340,
    img:'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=85&auto=format&fit=crop' },
  { id:61, name:'Epson EcoTank L3250 Wi-Fi Printer',     brand:'Epson',     cat:'printer', group:'computers', price:11999, originalPrice:16999, discount:29, rating:4.7, reviews:1890,
    img:'https://static.epsonshop.co.in/media/catalog/product/cache/cdcc8b312a05b9ee926321ee87314749/l/3/l3250_27042023_4_.jpg', badge:'Best Seller' },
];

// ── CATEGORY METADATA ────────────────────────────────────────────────────────
const CAT_META = {
  all:       { label:'All Products',        icon:'fas fa-th-large' },
  ac:        { label:'Air Conditioners',    icon:'fas fa-snowflake' },
  cooler:    { label:'Air Coolers',         icon:'fas fa-wind' },
  fan:       { label:'Fans',               icon:'fas fa-fan' },
  fridge:    { label:'Refrigerators',       icon:'fas fa-temperature-low' },
  washer:    { label:'Washing Machines',    icon:'fas fa-tshirt' },
  tv:        { label:'Televisions',         icon:'fas fa-tv' },
  soundbar:  { label:'Soundbars',           icon:'fas fa-volume-up' },
  speaker:   { label:'Speakers',            icon:'fas fa-music' },
  projector: { label:'Projectors',          icon:'fas fa-film' },
  laptop:    { label:'Laptops',             icon:'fas fa-laptop' },
  desktop:   { label:'Desktops',            icon:'fas fa-desktop' },
  monitor:   { label:'Monitors',            icon:'fas fa-tv' },
  printer:   { label:'Printers',            icon:'fas fa-print' },
  smartphone:{ label:'Smartphones',         icon:'fas fa-mobile-alt' },
  tablet:    { label:'Tablets',             icon:'fas fa-tablet-alt' },
  earphone:  { label:'Earphones',           icon:'fas fa-headphones' },
  powerbank: { label:'Power Banks',         icon:'fas fa-battery-full' },
  smartwatch:{ label:'Smart Watches',       icon:'fas fa-clock' },
  cctv:      { label:'CCTV Cameras',        icon:'fas fa-video' },
  smartbulb: { label:'Smart Bulbs',         icon:'fas fa-lightbulb' },
  doorbell:  { label:'Video Doorbells',     icon:'fas fa-bell' },
};

// ── HELPERS ──────────────────────────────────────────────────────────────────
function getBrandsForCat(cat) {
  const list = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  return [...new Set(list.map(p => p.brand))].sort();
}

function starHTML(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) s += '<i class="fas fa-star"></i>';
    else if (rating >= i - 0.5) s += '<i class="fas fa-star-half-alt"></i>';
    else s += '<i class="far fa-star"></i>';
  }
  return `<span class="stars">${s}</span> ${rating}`;
}

// ── BUILD PRODUCT CARD ────────────────────────────────────────────────────────
function buildCard(p) {
  // isInWishlist is defined in script.js; guard against loading order issues
  const inW = (typeof isInWishlist === 'function') ? isInWishlist(p.id) : false;
  const stars = starHTML(p.rating);
  const savings = p.originalPrice ? (p.originalPrice - p.price) : 0;
  // fallback image: always use the correct-category Unsplash URL
  const fallbackImg = (typeof REMOTE_IMG !== 'undefined' && REMOTE_IMG[p.cat])
    ? REMOTE_IMG[p.cat]
    : 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80';

  return `
  <div class="product-card" data-id="${p.id}">
    <div class="card-img-wrap">
      ${p.discount ? `<span class="card-disc">−${p.discount}%</span>` : ''}
      ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ''}
      <img
        src="${p.img}"
        alt="${p.brand} ${p.name}"
        loading="lazy"
        onerror="this.onerror=null;this.src='${fallbackImg}'"
      />
      <div class="card-overlay-btns">
        <button class="wl-btn ${inW ? 'active' : ''}" onclick="toggleWishlistItem(${p.id},event)" title="Wishlist">
          <i class="fa${inW ? 's' : 'r'} fa-heart"></i>
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="card-brand">${p.brand}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-rating">${stars} <span class="rev-count">(${p.reviews.toLocaleString()})</span></div>
      <div class="card-price-row">
        <span class="card-price">₹${p.price.toLocaleString('en-IN')}</span>
        ${p.originalPrice ? `<span class="card-orig">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
        ${savings > 0 ? `<span class="card-save">Save ₹${savings.toLocaleString('en-IN')}</span>` : ''}
      </div>
      <button class="card-cart-btn" onclick="addToCart(${p.id})">
        <i class="fas fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  </div>`;
}
