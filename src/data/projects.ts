export interface Project {
  id: string
  name: string
  highlights: string[]
  highlights_id: string[]
  tech: string[]
  type: 'external' | 'internal'
}

export interface ProjectGroup {
  company: string
  period: string
  projects: Project[]
}

export const projectGroups: ProjectGroup[] = [
  {
    company: 'PT Vita Shopindo',
    period: 'Jun 2026 – Present',
    projects: [],
  },
  {
    company: 'iCube',
    period: 'Aug 2020 – May 2026',
    projects: [
      {
        id: 'nivea',
        name: 'Nivea WaCommerce',
        highlights: [
          'Assisted with bulk data import into Magento',
          'Set up WhatsApp Business account for development',
          'Integrated product catalogue with Facebook Business Manager (FBM)',
          'Built REST APIs for product, stock, and order sync to WhatsApp',
          'Developed Laravel middleware for Magento-to-WhatsApp integration',
          'Implemented iCube custom checkout flow',
          'Configured n8n as order integration middleware',
        ],
        highlights_id: [
          'Membantu import data ke Magento',
          'Setup akun WhatsApp Business untuk pengembangan',
          'Integrasi katalog produk ke Facebook Business Manager (FBM)',
          'Membuat REST API untuk sinkronisasi produk, stok, dan pesanan ke WhatsApp',
          'Membuat middleware Laravel untuk integrasi Magento ke WhatsApp',
          'Menerapkan sistem custom checkout iCube',
          'Konfigurasi n8n sebagai middleware integrasi pesanan',
        ],
        tech: ['PHP', 'Magento 2', 'WhatsApp Business API', 'Laravel', 'n8n', 'REST API'],
        type: 'external',
      },
      {
        id: 'loreal',
        name: "L'Oréal WaCommerce",
        highlights: [
          'Assisted with bulk data import into Magento',
          'Set up WhatsApp Business account for development',
          'Integrated product catalogue with Facebook Business Manager (FBM)',
          'Built REST APIs for third-party product, stock, and order sync to WhatsApp',
        ],
        highlights_id: [
          'Membantu import data ke Magento',
          'Setup akun WhatsApp Business untuk pengembangan',
          'Integrasi data produk ke Facebook Business Manager (FBM)',
          'Membuat REST API untuk sinkronisasi produk, stok, dan pesanan ke WhatsApp',
        ],
        tech: ['PHP', 'Magento 2', 'WhatsApp Business API', 'REST API'],
        type: 'external',
      },
      {
        id: 'shipping-service',
        name: 'Shipping Service Shopify App',
        highlights: [
          'Designed the database architecture',
          'Built a dashboard and configuration panel embedded in Shopify Admin as a custom app',
          'Implemented CRUD operations for managing shipping data',
          'Added custom shipping methods to the Shopify checkout flow',
          'Built shipping method selection logic',
        ],
        highlights_id: [
          'Membuat struktur database',
          'Membuat dashboard dan panel konfigurasi yang di-embed ke Shopify Admin sebagai custom app',
          'Membuat CRUD untuk mengelola data pengiriman',
          'Menambahkan metode pengiriman kustom ke halaman checkout Shopify',
          'Membuat logika pengambilan metode pengiriman',
        ],
        tech: ['Shopify', 'Laravel', 'ReactJS', 'MySQL'],
        type: 'internal',
      },
      {
        id: 'channel-service',
        name: 'Channel Service',
        highlights: [
          'Designed the database architecture',
          'Built middleware for cross-platform integration (products, stock, orders)',
          'Implemented a queue system to handle long-running sync operations',
        ],
        highlights_id: [
          'Membuat struktur database',
          'Membuat middleware untuk integrasi antar platform (produk, stok, pesanan)',
          'Menerapkan sistem antrian untuk menghindari respons yang lama',
        ],
        tech: ['n8n', 'MySQL'],
        type: 'internal',
      },
      {
        id: 'catfootwear',
        name: 'Catfootwear',
        highlights: [
          'Integrated product and stock data from Magento to Shopify via n8n',
          'Customised order sync back to Magento',
          'Redirected checkout to iCube custom checkout',
          'Fixed slow integration performance issues',
        ],
        highlights_id: [
          'Integrasi produk dan stok dari Magento ke Shopify menggunakan n8n',
          'Kustomisasi integrasi pesanan ke Magento',
          'Mengalihkan checkout ke custom checkout iCube',
          'Memperbaiki masalah performa integrasi yang lambat',
        ],
        tech: ['PHP', 'Magento 2', 'Shopify', 'JavaScript', 'Laravel', 'n8n'],
        type: 'external',
      },
      {
        id: 'lesportac',
        name: 'Lesportac',
        highlights: [
          'Integrated product and stock data from Magento to Shopify via n8n',
          'Customised order sync back to Magento',
          'Redirected checkout to iCube custom checkout',
        ],
        highlights_id: [
          'Integrasi produk dan stok dari Magento ke Shopify menggunakan n8n',
          'Kustomisasi integrasi pesanan ke Magento',
          'Mengalihkan checkout ke custom checkout iCube',
        ],
        tech: ['PHP', 'Magento 2', 'Shopify', 'JavaScript', 'Laravel', 'n8n'],
        type: 'external',
      },
      {
        id: 'planet-gadget',
        name: 'Planet Gadget',
        highlights: [
          'Updated and maintained existing features',
          'Built REST APIs for various required functionalities',
          'Fixed flash sale module issues',
          'Developed ERP–Magento integration module',
        ],
        highlights_id: [
          'Memperbarui dan memelihara fitur-fitur yang sudah ada',
          'Membuat REST API untuk berbagai fitur yang dibutuhkan',
          'Memperbaiki masalah pada modul flash sale',
          'Membuat modul integrasi ERP dan Magento',
        ],
        tech: ['PHP', 'Magento 2', 'REST API'],
        type: 'external',
      },
      {
        id: 'csa',
        name: 'CSA',
        highlights: [
          'Added validation to prevent zero-price products from entering cart',
          'Implemented PDP/PLP advanced shipping rate and price calculation',
          'Built GraphQL endpoints for quotation, credit limit, and related features',
          'Investigated and fixed Xendit payment gateway module issues',
        ],
        highlights_id: [
          'Membuat validasi agar produk dengan harga 0 tidak bisa masuk keranjang',
          'Implementasi kalkulasi harga dan ongkir advance rate di PDP/PLP',
          'Membuat endpoint GraphQL untuk quotation, credit limit, dan fitur terkait',
          'Investigasi dan perbaikan masalah pada modul payment gateway Xendit',
        ],
        tech: ['PHP', 'Magento 2', 'GraphQL'],
        type: 'external',
      },
      {
        id: 'focus-nusantara',
        name: 'Focus Nusantara',
        highlights: [
          'Built GraphQL affiliate, free item promo, and related features',
          'Implemented workshop/event management in the backoffice',
          'Created custom email templates',
          'Investigated and fixed checkout error when product price is 0',
        ],
        highlights_id: [
          'Membuat fitur GraphQL afiliasi, promo item gratis, dan fitur terkait',
          'Mengimplementasi fitur workshop/event di backoffice',
          'Membuat beberapa custom email template',
          'Investigasi dan perbaikan error checkout saat harga produk 0',
        ],
        tech: ['PHP', 'Magento 2', 'GraphQL'],
        type: 'external',
      },
      {
        id: 'kiehberg',
        name: 'Kiehberg (India & Germany)',
        highlights: [
          'Installed and configured required modules',
          'Migrated data from Magento 1 to Magento 2',
          'Implemented order tracking feature',
          'Customised PDP to display tier pricing table and handle conditional logic',
          'Customised sales order backoffice to display custom fields',
        ],
        highlights_id: [
          'Instalasi dan konfigurasi modul-modul yang dibutuhkan',
          'Migrasi data dari Magento 1 ke Magento 2',
          'Mengimplementasikan fitur pelacakan pesanan',
          'Kustomisasi PDP untuk menampilkan tabel tier pricing dan menangani logika kondisional',
          'Kustomisasi backoffice sales order untuk menampilkan custom field',
        ],
        tech: ['PHP', 'Magento 2'],
        type: 'external',
      },
      {
        id: 'indesso',
        name: 'Indesso / Isensso',
        highlights: [
          'Migrated data from the previous site to the new platform',
          'Customised the blog page',
          'Built PDF report generation feature',
        ],
        highlights_id: [
          'Migrasi data dari web sebelumnya ke platform baru',
          'Kustomisasi halaman blog',
          'Membuat fitur pembuatan laporan dalam format PDF',
        ],
        tech: ['PHP', 'Magento 2'],
        type: 'external',
      },
      {
        id: 'lottemart',
        name: 'Lottemart Apps',
        highlights: [
          'Implemented push notifications from backend to frontend',
        ],
        highlights_id: [
          'Mengimplementasikan push notification dari backend ke frontend',
        ],
        tech: ['PHP', 'Magento 2'],
        type: 'external',
      },
      {
        id: 'thermos',
        name: 'Thermos',
        highlights: [
          'Assisted with middleware installation for product, order, and stock sync',
        ],
        highlights_id: [
          'Membantu instalasi middleware untuk sinkronisasi produk, pesanan, dan stok',
        ],
        tech: ['PHP', 'Magento 2', 'Shopify', 'Laravel'],
        type: 'external',
      },
      {
        id: 'melawai',
        name: 'Melawai',
        highlights: [
          'Migrated POS/RMS features from the legacy system to the new platform',
        ],
        highlights_id: [
          'Mengerjakan fitur-fitur POS/RMS dari sistem lama ke sistem baru',
        ],
        tech: ['PHP', 'Magento 2'],
        type: 'external',
      },
    ],
  },
]
