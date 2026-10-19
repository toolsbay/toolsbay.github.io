export interface LanguageConfig {
  code: string;
  badge: string;
  label: string;
  path: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'en', badge: 'US', label: 'English', path: '/' },
  { code: 'es', badge: 'ES', label: 'Español', path: '/es' },
  { code: 'pt', badge: 'BR', label: 'Português', path: '/pt' },
  { code: 'de', badge: 'DE', label: 'Deutsch', path: '/de' },
  { code: 'fr', badge: 'FR', label: 'Français', path: '/fr' },
  { code: 'ja', badge: 'JP', label: '日本語', path: '/ja' },
  { code: 'zh', badge: 'CN', label: '简体中文', path: '/zh' },
];

export interface TranslationDictionary {
  siteTitle: string;
  siteDescription: string;
  badge55: string;
  supportDev: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  categories: {
    all: string;
    pinned: string;
    video_and_audio: string;
    image_and_design: string;
    pdf_and_documents: string;
    productivity_and_wellness: string;
    dev_finance_and_utility: string;
  };
  pinnedSectionTitle: string;
  pinnedEmptyDesc: string;
  noResultsTitle: string;
  noResultsDesc: string;
  resetFilters: string;
  showingTools: string;
  toolSingular: string;
  toolsPlural: string;
  launchTool: string;
  pinTool: string;
  unpinTool: string;
  features: {
    zeroServerTitle: string;
    zeroServerDesc: string;
    noSignupTitle: string;
    noSignupDesc: string;
    lightningFastTitle: string;
    lightningFastDesc: string;
  };
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  footerRights: string;
  privacyPill: string;
}

export const translations: Record<string, TranslationDictionary> = {
  en: {
    siteTitle: "ToolsBay | 55+ Free Zero-Server Browser Tools & Utilities",
    siteDescription: "An ultra-minimal, 100% client-side master web directory. Over 55 privacy-first, zero-server browser utilities with instant fuzzy search and favorites.",
    badge55: "55+ Zero-Server Tools",
    supportDev: "Support Developer",
    heroBadge: "⚡ 100% Client-Side & Zero-Server",
    heroTitle: "Your Private Browser Toolbox",
    heroSubtitle: "Over 55 lightning-fast, privacy-first web utilities running directly in your browser. No registration, zero server uploads, completely free forever.",
    searchPlaceholder: "Search 55+ tools... (Press Cmd+K or /)",
    searchAriaLabel: "Search tools",
    categories: {
      all: "All Tools",
      pinned: "Pinned",
      video_and_audio: "Video & Audio",
      image_and_design: "Image & Design",
      pdf_and_documents: "PDF & Docs",
      productivity_and_wellness: "Productivity & Wellness",
      dev_finance_and_utility: "Dev & Finance",
    },
    pinnedSectionTitle: "Your Pinned Tools",
    pinnedEmptyDesc: "Click the star icon on any tool card to pin it here for quick access.",
    noResultsTitle: "No tools found",
    noResultsDesc: "We couldn't find any tools matching your search criteria. Try a different term or clear filters.",
    resetFilters: "Reset Filters",
    showingTools: "Showing",
    toolSingular: "tool",
    toolsPlural: "tools",
    launchTool: "Open Tool",
    pinTool: "Pin to favorites",
    unpinTool: "Unpin tool",
    features: {
      zeroServerTitle: "100% Client-Side",
      zeroServerDesc: "Your files never leave your computer. Processing runs locally in browser memory via WebAssembly.",
      noSignupTitle: "Zero Signup or Limits",
      noSignupDesc: "No accounts, no subscriptions, no credit cards, and no usage quotas. Completely free forever.",
      lightningFastTitle: "Instant & Lightweight",
      lightningFastDesc: "Optimized for lightning speed, zero load latency, and seamless offline responsiveness.",
    },
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "Are these browser tools really 100% free?",
        answer: "Yes, all 55+ utilities on ToolsBay are completely free to use without paywalls, tiers, or daily restrictions.",
      },
      {
        question: "Do my files ever get uploaded to an external server?",
        answer: "Never. All tools use modern client-side WebAssembly, Canvas, and HTML5 Web APIs. Your photos, videos, PDFs, and data remain strictly on your local device.",
      },
      {
        question: "Do I need to create an account or sign up?",
        answer: "No account or registration is required. Click any tool and begin working immediately.",
      },
      {
        question: "How do pinned favorites work?",
        answer: "When you click the star icon on any tool, it is saved directly to your browser's LocalStorage. Your favorites are instantly restored whenever you revisit ToolsBay.",
      },
    ],
    footerRights: "ToolsBay. All rights reserved. 100% Client-Side & Privacy-First.",
    privacyPill: "Zero Tracking & Zero Server Uploads",
  },
  es: {
    siteTitle: "ToolsBay | 55+ Herramientas Web Gratuitas Sin Servidor",
    siteDescription: "Directorio web maestro ultra-minimalista 100% del lado del cliente. Más de 55 utilidades de navegador sin servidor, privadas y rápidas.",
    badge55: "55+ Herramientas Sin Servidor",
    supportDev: "Apoyar al Desarrollador",
    heroBadge: "⚡ 100% En Tu Navegador y Seguro",
    heroTitle: "Tu Caja de Herramientas Privada",
    heroSubtitle: "Más de 55 herramientas web ultrarrápidas y privadas ejecutadas directamente en tu navegador. Sin registro ni subidas al servidor.",
    searchPlaceholder: "Buscar entre 55+ herramientas... (Cmd+K o /)",
    searchAriaLabel: "Buscar herramientas",
    categories: {
      all: "Todas",
      pinned: "Fijadas",
      video_and_audio: "Vídeo y Audio",
      image_and_design: "Imagen y Diseño",
      pdf_and_documents: "PDF y Docs",
      productivity_and_wellness: "Productividad y Bienestar",
      dev_finance_and_utility: "Dev y Finanzas",
    },
    pinnedSectionTitle: "Tus Herramientas Fijadas",
    pinnedEmptyDesc: "Haz clic en la estrella de cualquier tarjeta para fijarla aquí.",
    noResultsTitle: "No se encontraron herramientas",
    noResultsDesc: "No encontramos herramientas con ese criterio. Prueba con otro término.",
    resetFilters: "Restablecer Filtros",
    showingTools: "Mostrando",
    toolSingular: "herramienta",
    toolsPlural: "herramientas",
    launchTool: "Abrir Herramienta",
    pinTool: "Fijar a favoritos",
    unpinTool: "Desfijar herramienta",
    features: {
      zeroServerTitle: "100% En Tu Dispositivo",
      zeroServerDesc: "Tus archivos nunca salen de tu ordenador. Todo el proceso ocurre en la memoria del navegador.",
      noSignupTitle: "Sin Registro Ni Límites",
      noSignupDesc: "Sin cuentas, suscripciones ni tarjetas. Completamente libre para siempre.",
      lightningFastTitle: "Ultrarrápido",
      lightningFastDesc: "Optimizado con WebAssembly y APIs modernas para una ejecución inmediata.",
    },
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      {
        question: "¿Son realmente gratuitas todas las herramientas?",
        answer: "Sí, las 55+ utilidades en ToolsBay son totalmente gratuitas y sin ningún coste oculto.",
      },
      {
        question: "¿Se suben mis archivos a algún servidor externo?",
        answer: "No, en absoluto. Todo se procesa de forma 100% local en tu navegador con tecnología WebAssembly.",
      },
      {
        question: "¿Debo registrarme para usarlas?",
        answer: "No necesitas registrarte ni facilitar datos personales. Puedes usar cualquier herramienta al instante.",
      },
      {
        question: "¿Cómo funcionan los favoritos fijados?",
        answer: "Al pulsar el icono de estrella, se guarda en el LocalStorage de tu navegador para que siempre esté disponible.",
      },
    ],
    footerRights: "ToolsBay. Todos los derechos reservados. 100% Local y Privado.",
    privacyPill: "Cero Rastreo y Cero Subidas",
  },
  pt: {
    siteTitle: "ToolsBay | 55+ Ferramentas Web Gratuitas Sem Servidor",
    siteDescription: "Diretório mestre ultra-minimalista 100% no cliente. Mais de 55 utilitários de navegador com privacidade total e busca instantânea.",
    badge55: "55+ Ferramentas Sem Servidor",
    supportDev: "Apoiar o Desenvolvedor",
    heroBadge: "⚡ 100% No Navegador e Privado",
    heroTitle: "Sua Caixa de Ferramentas Privada",
    heroSubtitle: "Mais de 55 utilitários web ultrarrápidos executados diretamente no seu navegador. Sem cadastro, sem envio a servidores.",
    searchPlaceholder: "Pesquisar 55+ ferramentas... (Cmd+K ou /)",
    searchAriaLabel: "Pesquisar ferramentas",
    categories: {
      all: "Todas",
      pinned: "Fixadas",
      video_and_audio: "Vídeo e Áudio",
      image_and_design: "Imagem e Design",
      pdf_and_documents: "PDF e Docs",
      productivity_and_wellness: "Produtividade e Bem-estar",
      dev_finance_and_utility: "Dev e Finanças",
    },
    pinnedSectionTitle: "Suas Ferramentas Fixadas",
    pinnedEmptyDesc: "Clique na estrela de qualquer ferramenta para fixá-la aqui no topo.",
    noResultsTitle: "Nenhuma ferramenta encontrada",
    noResultsDesc: "Não encontramos utilitários com esses termos. Tente outra busca.",
    resetFilters: "Redefinir Filtros",
    showingTools: "Exibindo",
    toolSingular: "ferramenta",
    toolsPlural: "ferramentas",
    launchTool: "Abrir Ferramenta",
    pinTool: "Fixar nos favoritos",
    unpinTool: "Desafixar ferramenta",
    features: {
      zeroServerTitle: "100% No Cliente",
      zeroServerDesc: "Seus arquivos nunca saem do seu computador. O processamento é totalmente local.",
      noSignupTitle: "Sem Cadastro ou Limites",
      noSignupDesc: "Sem contas ou mensalidades. Totalmente aberto e livre para sempre.",
      lightningFastTitle: "Instantâneo e Eficiente",
      lightningFastDesc: "Desenvolvido com WebAssembly e APIs HTML5 para o máximo desempenho.",
    },
    faqTitle: "Perguntas Frequentes",
    faqs: [
      {
        question: "Estas ferramentas são realmente gratuitas?",
        answer: "Sim, todas as 55+ ferramentas do ToolsBay são 100% gratuitas e sem restrições de uso.",
      },
      {
        question: "Meus arquivos são enviados para servidores?",
        answer: "Não. A arquitetura é totalmente client-side. Seus dados nunca saem do seu navegador.",
      },
      {
        question: "Preciso criar uma conta para utilizar?",
        answer: "Nenhum cadastro é necessário. Basta abrir e utilizar imediatamente.",
      },
      {
        question: "Como funciona a lista de favoritos fixados?",
        answer: "Ao clicar na estrela, o app grava sua preferência no LocalStorage do navegador.",
      },
    ],
    footerRights: "ToolsBay. Todos os direitos reservados. 100% Local e Seguro.",
    privacyPill: "Sem Rastreamento e Sem Servidores",
  },
  de: {
    siteTitle: "ToolsBay | 55+ Kostenlose Browser-Werkzeuge Ohne Server",
    siteDescription: "Ultra-minimalistisches, 100% client-seitiges Web-Verzeichnis mit über 55 datenschutzfreundlichen Browser-Werkzeugen.",
    badge55: "55+ Werkzeuge Ohne Server",
    supportDev: "Entwickler Unterstützen",
    heroBadge: "⚡ 100% Client-Seitig & Privat",
    heroTitle: "Ihr Privater Browser-Werkzeugkasten",
    heroSubtitle: "Über 55 blitzschnelle Web-Tools direkt in Ihrem Browser. Keine Registrierung, keine Server-Uploads, dauerhaft kostenlos.",
    searchPlaceholder: "55+ Tools durchsuchen... (Cmd+K oder /)",
    searchAriaLabel: "Tools suchen",
    categories: {
      all: "Alle Tools",
      pinned: "Favoriten",
      video_and_audio: "Video & Audio",
      image_and_design: "Bild & Design",
      pdf_and_documents: "PDF & Dokumente",
      productivity_and_wellness: "Produktivität & Wohlbefinden",
      dev_finance_and_utility: "Dev & Finanzen",
    },
    pinnedSectionTitle: "Ihre Angehefteten Tools",
    pinnedEmptyDesc: "Klicken Sie auf den Stern eines Tools, um es hier oben anzuheften.",
    noResultsTitle: "Keine Tools gefunden",
    noResultsDesc: "Keine Werkzeuge für Ihre Suche gefunden. Bitte Suchbegriff anpassen.",
    resetFilters: "Filter Zurücksetzen",
    showingTools: "Angezeigt:",
    toolSingular: "Tool",
    toolsPlural: "Tools",
    launchTool: "Tool Öffnen",
    pinTool: "Als Favorit anheften",
    unpinTool: "Favorit entfernen",
    features: {
      zeroServerTitle: "100% Client-Seitig",
      zeroServerDesc: "Ihre Dateien verlassen niemals Ihren Computer. Alles wird lokal im Speicher verarbeitet.",
      noSignupTitle: "Keine Registrierung",
      noSignupDesc: "Keine Abonnements oder Konten. Sofort nutzbar für jedermann.",
      lightningFastTitle: "Blitzschnell",
      lightningFastDesc: "Mit WebAssembly und modernen Web-APIs für maximale Geschwindigkeit optimiert.",
    },
    faqTitle: "Häufig Gestellte Fragen",
    faqs: [
      {
        question: "Sind diese Werkzeuge wirklich komplett kostenlos?",
        answer: "Ja, alle über 55 Tools auf ToolsBay sind absolut kostenlos ohne Abos oder Beschränkungen.",
      },
      {
        question: "Werden meine Dateien auf Server hochgeladen?",
        answer: "Nein, niemals. Die Verarbeitung erfolgt zu 100% lokal in Ihrem Browser.",
      },
      {
        question: "Muss ich ein Benutzerkonto anlegen?",
        answer: "Nein, keine Anmeldung erforderlich. Sie können sofort loslegen.",
      },
      {
        question: "Wie funktioniert die Favoriten-Funktion?",
        answer: "Der Stern speichert das Tool im LocalStorage Ihres Browsers, sodass es beim nächsten Besuch oben bleibt.",
      },
    ],
    footerRights: "ToolsBay. Alle Rechte vorbehalten. 100% Client-Seitig & Datenschutz.",
    privacyPill: "Kein Tracking & Keine Server-Uploads",
  },
  fr: {
    siteTitle: "ToolsBay | 55+ Outils Web Gratuits Sans Serveur",
    siteDescription: "Répertoire web ultra-minimaliste 100% côté client. Plus de 55 utilitaires de navigateur respectueux de la vie privée.",
    badge55: "55+ Outils Sans Serveur",
    supportDev: "Soutenir le Développeur",
    heroBadge: "⚡ 100% Côté Client & Privé",
    heroTitle: "Votre Boîte à Outils Privée",
    heroSubtitle: "Plus de 55 utilitaires web ultra-rapides exécutés directement dans votre navigateur. Sans inscription ni téléversement.",
    searchPlaceholder: "Rechercher parmi 55+ outils... (Cmd+K ou /)",
    searchAriaLabel: "Rechercher des outils",
    categories: {
      all: "Tous les Outils",
      pinned: "Épinglés",
      video_and_audio: "Vidéo & Audio",
      image_and_design: "Image & Design",
      pdf_and_documents: "PDF & Docs",
      productivity_and_wellness: "Productivité & Bien-être",
      dev_finance_and_utility: "Dev & Finance",
    },
    pinnedSectionTitle: "Vos Outils Épinglés",
    pinnedEmptyDesc: "Cliquez sur l'étoile d'un outil pour l'épingler ici.",
    noResultsTitle: "Aucun outil trouvé",
    noResultsDesc: "Aucun outil ne correspond à vos critères. Essayez un autre terme.",
    resetFilters: "Réinitialiser les Filtres",
    showingTools: "Affichage de",
    toolSingular: "outil",
    toolsPlural: "outils",
    launchTool: "Ouvrir l'Outil",
    pinTool: "Épingler aux favoris",
    unpinTool: "Détacher l'outil",
    features: {
      zeroServerTitle: "100% Côté Client",
      zeroServerDesc: "Vos fichiers restent sur votre appareil. Le traitement se fait localement dans le navigateur.",
      noSignupTitle: "Sans Inscription",
      noSignupDesc: "Aucun compte ni abonnement requis. Gratuit et accessible pour toujours.",
      lightningFastTitle: "Instantané & Rapide",
      lightningFastDesc: "Propulsé par WebAssembly et les APIs HTML5 pour une réactivité maximale.",
    },
    faqTitle: "Foire Aux Questions",
    faqs: [
      {
        question: "Ces outils sont-ils réellement 100% gratuits ?",
        answer: "Oui, tous les 55+ utilitaires de ToolsBay sont entièrement gratuits et sans limitation.",
      },
      {
        question: "Mes fichiers sont-ils envoyés sur un serveur ?",
        answer: "Non, jamais. Tout le traitement se fait exclusivement en mémoire locale dans votre navigateur.",
      },
      {
        question: "Faut-il créer un compte ?",
        answer: "Aucune inscription n'est nécessaire. Lancez n'importe quel outil immédiatement.",
      },
      {
        question: "Comment fonctionnent les outils épinglés ?",
        answer: "Cliquer sur l'étoile enregistre l'outil dans le LocalStorage de votre navigateur.",
      },
    ],
    footerRights: "ToolsBay. Tous droits réservés. 100% Local & Privé.",
    privacyPill: "Zéro Suivi & Zéro Serveur",
  },
  ja: {
    siteTitle: "ToolsBay | 55+ 無料・サーバー不要ブラウザツール一覧",
    siteDescription: "完全クライアントサイドで動作するミニマルなWebツール総合ディレクトリ。プライバシー最優先、登録不要の55種類以上の便利ツール。",
    badge55: "55+ サーバー不要ツール",
    supportDev: "開発者を応援",
    heroBadge: "⚡ 100% クライアント処理＆高セキュリティ",
    heroTitle: "あなただけのプライベートWeb道具箱",
    heroSubtitle: "ブラウザ内で完結する55以上の高速・セキュアなWebツール。サーバーへのアップロードなし、アカウント登録不要で完全無料。",
    searchPlaceholder: "55以上のツールを検索... (Cmd+K または /)",
    searchAriaLabel: "ツールを検索",
    categories: {
      all: "すべてのツール",
      pinned: "お気に入り",
      video_and_audio: "動画＆音声",
      image_and_design: "画像＆デザイン",
      pdf_and_documents: "PDF＆書類",
      productivity_and_wellness: "作業効率＆ヘルスケア",
      dev_finance_and_utility: "開発＆金融・便利ツール",
    },
    pinnedSectionTitle: "ピン留めしたツール",
    pinnedEmptyDesc: "ツールの星アイコンをクリックすると、ここにお気に入りが固定されます。",
    noResultsTitle: "ツールが見つかりません",
    noResultsDesc: "該当するツールがありませんでした。検索ワードを変更してみてください。",
    resetFilters: "フィルターを解除",
    showingTools: "表示中:",
    toolSingular: "件",
    toolsPlural: "件",
    launchTool: "ツールを開く",
    pinTool: "お気に入りに追加",
    unpinTool: "お気に入りを解除",
    features: {
      zeroServerTitle: "完全クライアントサイド",
      zeroServerDesc: "ファイルが外部サーバーに送信されることは一切ありません。ブラウザ内で安全に高速処理されます。",
      noSignupTitle: "登録・制限なし",
      noSignupDesc: "アカウント登録や有料プランは一切不要。いつでも誰でもすぐに使えます。",
      lightningFastTitle: "超高速・軽量設計",
      lightningFastDesc: "WebAssemblyとHTML5標準技術を活用し、遅延のない軽快な操作性を実現。",
    },
    faqTitle: "よくあるご質問",
    faqs: [
      {
        question: "すべてのツールは本当に完全無料ですか？",
        answer: "はい、ToolsBayに掲載されている55種類以上のツールはすべて完全無料で、利用制限もありません。",
      },
      {
        question: "ファイルが外部サーバーにアップロードされることはありますか？",
        answer: "一切ありません。すべての処理はブラウザのメモリ内（WebAssembly等）で完結します。",
      },
      {
        question: "会員登録やログインは必要ですか？",
        answer: "不要です。アクセスしてすぐに各種ツールをご利用いただけます。",
      },
      {
        question: "ピン留め（お気に入り）機能の仕組みは？",
        answer: "星アイコンを押すと、お使いのブラウザのLocalStorageに保存され、次回訪問時にも最上部に表示されます。",
      },
    ],
    footerRights: "ToolsBay. 全著作権所有。完全クライアント動作・プライバシー優先。",
    privacyPill: "トラッキングなし・サーバー通信なし",
  },
  zh: {
    siteTitle: "ToolsBay | 55+ 免费纯前端无服务器在线工具箱",
    siteDescription: "极简、100% 浏览器客户端运行的实用工具导航目录。汇聚55+隐私安全、无需上传服务器的高效生产力工具。",
    badge55: "55+ 零服务器工具",
    supportDev: "赞助开发者",
    heroBadge: "⚡ 100% 浏览器本地运算・隐私安全",
    heroTitle: "您的私密浏览器在线工具箱",
    heroSubtitle: "超过55款极速、隐私优先的在线工具，全部在浏览器本地完成处理。无需注册、零服务器上传、永久免费使用。",
    searchPlaceholder: "搜索 55+ 款在线工具... (快捷键 Cmd+K 或 /)",
    searchAriaLabel: "搜索工具",
    categories: {
      all: "全部工具",
      pinned: "已置顶",
      video_and_audio: "音视频处理",
      image_and_design: "图片与设计",
      pdf_and_documents: "PDF与文档",
      productivity_and_wellness: "效率与生活",
      dev_finance_and_utility: "开发与金融工具",
    },
    pinnedSectionTitle: "您的置顶收藏工具",
    pinnedEmptyDesc: "点击卡片右上角的星标图标，即可将常用工具置顶在此处方便随时打开。",
    noResultsTitle: "未找到相关工具",
    noResultsDesc: "未检索到匹配的工具，请尝试其他关键词或清除筛选器。",
    resetFilters: "重置筛选",
    showingTools: "共展示",
    toolSingular: "款工具",
    toolsPlural: "款工具",
    launchTool: "立即打开",
    pinTool: "加入置顶收藏",
    unpinTool: "取消置顶",
    features: {
      zeroServerTitle: "100% 客户端本地处理",
      zeroServerDesc: "文件与数据绝不上传服务器，全在浏览器内存利用 WebAssembly 快速安全运算。",
      noSignupTitle: "无需注册・无使用上限",
      noSignupDesc: "无会员机制、无付费墙、无使用频次限制，打开即可完全免费畅享。",
      lightningFastTitle: "极速极简体验",
      lightningFastDesc: "基于现代 Web 标准构建，加载迅速、零延迟，支持离线轻量访问。",
    },
    faqTitle: "常见问题解答",
    faqs: [
      {
        question: "这些工具真的全都免费吗？",
        answer: "是的，ToolsBay 上的 55+ 款工具全部 100% 免费，没有任何隐藏收费或功能限制。",
      },
      {
        question: "我的个人文件会被上传到服务器吗？",
        answer: "绝不会。所有工具均采用零服务器（Zero-Server）技术，所有视频、PDF、图片数据仅在您的设备本地处理。",
      },
      {
        question: "使用前需要注册账号吗？",
        answer: "无需任何账号或登录操作，随时点开即可直接使用。",
      },
      {
        question: "置顶收藏功能是如何存储的？",
        answer: "点击星标后，数据会自动存储在您本地浏览器的 LocalStorage 中，刷新或下次访问依然保留。",
      },
    ],
    footerRights: "ToolsBay. 保留所有权利。100% 本地运算・隐私保护。",
    privacyPill: "零追踪・零服务器上传",
  },
};
