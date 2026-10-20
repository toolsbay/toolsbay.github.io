export interface ToolItem {
  id: string;
  name: string;
  url: string;
  desc: string;
  category: 'video_and_audio' | 'image_and_design' | 'pdf_and_documents' | 'productivity_and_wellness' | 'dev_finance_and_utility';
  tags: string[];
  icon: string;
  badge?: string;
  localizedDesc?: Partial<Record<'es' | 'pt' | 'de' | 'fr' | 'ja' | 'zh', string>>;
}

export const TOOLS_CATALOG: ToolItem[] = [
  // ==========================================
  // 🎬 Video & Audio (15 tools)
  // ==========================================
  {
    id: 'audio-cutter',
    name: 'AudioCutter',
    url: 'https://audio-cutter.github.io/',
    desc: 'Trim and cut audio tracks visually with waveform precision.',
    category: 'video_and_audio',
    tags: ['mp3', 'cut', 'audio', 'waveform', 'trim', 'sound', 'slice'],
    icon: 'Scissors',
    badge: 'Popular',
    localizedDesc: {
      es: 'Recorta y edita pistas de audio con precisión de forma de onda.',
      pt: 'Corte e apare faixas de áudio com precisão visual de onda.',
      de: 'Audiodateien mit Wellenform-Präzision schneiden und trimmen.',
      fr: 'Découpez vos pistes audio avec précision grâce à la forme d\'onde.',
      ja: '波形を見ながら高精度に音声トラックをカット・トリミング。',
      zh: '基于波形图高精度剪辑、裁剪 MP3/WAV 音频。'
    }
  },
  {
    id: 'audiojoiner',
    name: 'AudioJoiner',
    url: 'https://audiojoiner.github.io/',
    desc: 'Merge multiple audio files into a single track.',
    category: 'video_and_audio',
    tags: ['merge', 'audio', 'join', 'mp3', 'combine', 'music'],
    icon: 'Music',
    localizedDesc: {
      es: 'Une múltiples archivos de audio en una sola pista continua.',
      pt: 'Junte múltiplos arquivos de áudio em uma única faixa contínua.',
      de: 'Mehrere Audiodateien zu einem einzigen Track zusammenfügen.',
      fr: 'Fusionnez plusieurs fichiers audio en un seul morceau.',
      ja: '複数の音声ファイルを結合して1つのトラックに統合。',
      zh: '将多段音频文件无缝合并为单个连续音轨。'
    }
  },
  {
    id: 'browser-dj',
    name: 'BrowserDJ',
    url: 'https://browser-dj.github.io/',
    desc: 'Pro dual-deck DJ controller and mixer in your browser.',
    category: 'video_and_audio',
    tags: ['dj', 'music', 'mix', 'mixer', 'decks', 'crossfade', 'beats'],
    icon: 'Disc3',
    badge: 'Interactive',
    localizedDesc: {
      es: 'Controlador y mezclador de DJ profesional de doble platina en tu navegador.',
      pt: 'Controlador e mixer de DJ de deck duplo profissional no navegador.',
      de: 'Professioneller Dual-Deck DJ-Controller und Mixer im Browser.',
      fr: 'Contrôleur et mixeur DJ pro double platine dans votre navigateur.',
      ja: 'ブラウザ上で動作するデュアルデッキ本格DJミキサー。',
      zh: '浏览器内运行的专业双轨 DJ 混音与打碟控制器。'
    }
  },
  {
    id: 'browsercut',
    name: 'BrowserCut',
    url: 'https://browsercut.github.io/',
    desc: 'Fast client-side video trimmer and cutter.',
    category: 'video_and_audio',
    tags: ['video', 'trim', 'cut', 'fast', 'mp4', 'webm', 'editor'],
    icon: 'Film',
    localizedDesc: {
      es: 'Recortador y cortador de vídeo rápido 100% en el cliente.',
      pt: 'Cortador e aparador de vídeo rápido direto no navegador.',
      de: 'Schneller client-seitiger Video-Cutter und Trimmer.',
      fr: 'Découpeur et rogneur de vidéo rapide côté client.',
      ja: 'ブラウザローカルで動作する高速動画トリマー＆カッター。',
      zh: '纯前端本地快速裁剪与分割视频短片。'
    }
  },
  {
    id: 'compressvideo',
    name: 'CompressVideo',
    url: 'https://compressvideo.github.io/',
    desc: 'Reduce video file size locally without losing quality.',
    category: 'video_and_audio',
    tags: ['compress', 'video', 'shrink', 'mp4', 'filesize', 'optimize'],
    icon: 'Minimize2',
    badge: 'Popular',
    localizedDesc: {
      es: 'Reduce el tamaño de vídeos localmente manteniendo la calidad visual.',
      pt: 'Reduza o tamanho de vídeos localmente sem perder qualidade.',
      de: 'Videodateigröße lokal verringern ohne sichtbaren Qualitätsverlust.',
      fr: 'Réduisez la taille de vos vidéos localement sans perte de qualité.',
      ja: '画質を落とさずにブラウザ内で動画ファイル容量を圧縮。',
      zh: '本地快速压缩视频体积，保留高清画质。'
    }
  },
  {
    id: 'memory-reel',
    name: 'MemoryReel',
    url: 'https://memory-reel.github.io/',
    desc: 'Turn travel photos and music into a slideshow video.',
    category: 'video_and_audio',
    tags: ['slideshow', 'photos', 'video', 'memories', 'reel', 'music'],
    icon: 'Sparkles',
    localizedDesc: {
      es: 'Convierte fotos de viajes y música en un emotivo vídeo de diapositivas.',
      pt: 'Transforme fotos e músicas em um vídeo de recordação.',
      de: 'Reisefotos und Musik in ein Slideshow-Video verwandeln.',
      fr: 'Transformez photos et musique en vidéo diaporama.',
      ja: '写真とBGMを組み合わせてスライドショー動画を作成。',
      zh: '将旅行照片与音乐合成为精美幻灯片视频。'
    }
  },
  {
    id: 'mergevideo',
    name: 'MergeVideo',
    url: 'https://mergevideo.github.io/',
    desc: 'Combine multiple MP4, WebM, and MOV clips instantly.',
    category: 'video_and_audio',
    tags: ['merge', 'video', 'combine', 'mp4', 'webm', 'joiner'],
    icon: 'Layers',
    localizedDesc: {
      es: 'Combina múltiples clips MP4, WebM y MOV al instante.',
      pt: 'Combine clipes MP4, WebM e MOV instantaneamente.',
      de: 'Mehrere MP4-, WebM- und MOV-Clips sofort kombinieren.',
      fr: 'Combinez plusieurs clips MP4, WebM et MOV instantanément.',
      ja: 'MP4、WebM、MOVクリップをまとめて1本の動画に結合。',
      zh: '快速将多段 MP4、WebM 或 MOV 视频拼成一个文件。'
    }
  },
  {
    id: 'video-merger',
    name: 'VideoMerger Studio',
    url: 'https://video-merger.github.io/',
    desc: 'Multi-clip video combiner with aspect ratios and crossfades.',
    category: 'video_and_audio',
    tags: ['editor', 'aspect-ratio', 'crossfade', 'canvas', 'video', 'combine'],
    icon: 'Clapperboard',
    badge: 'Featured',
    localizedDesc: {
      es: 'Combinador de vídeo con soporte de relación de aspecto y transiciones.',
      pt: 'Combinador de vídeos com proporções e transições crossfade.',
      de: 'Video-Combiner mit Seitenverhältnissen und Überblendungen.',
      fr: 'Combinateur de vidéos avec formats d\'image et transitions fondu.',
      ja: 'アスペクト比調整やクロスフェード対応の本格動画合成スタジオ。',
      zh: '支持多画幅比例与淡入淡出转场的专业视频合成工作台。'
    }
  },
  {
    id: 'screenrecord',
    name: 'ScreenRecord',
    url: 'https://screenrecord.github.io/',
    desc: 'Record your screen and audio with zero downloads.',
    category: 'video_and_audio',
    tags: ['screen', 'recorder', 'capture', 'mic', 'tab', 'video'],
    icon: 'Video',
    badge: 'Popular',
    localizedDesc: {
      es: 'Graba tu pantalla y audio sin necesidad de instalar programas.',
      pt: 'Grave sua tela e áudio sem instalar programas.',
      de: 'Bildschirm und Audio ohne Downloads direkt im Browser aufnehmen.',
      fr: 'Enregistrez votre écran et votre micro sans aucun logiciel.',
      ja: 'ソフトインストール不要で画面とマイク音声を簡単録画。',
      zh: '免安装任何插件，直接录制屏幕、窗口与麦克风声音。'
    }
  },
  {
    id: 'silenceremover',
    name: 'SilenceRemover',
    url: 'https://silenceremover.github.io/',
    desc: 'Automatically strip awkward pauses from audio and video.',
    category: 'video_and_audio',
    tags: ['silence', 'remove', 'audio', 'pause', 'podcast', 'speed'],
    icon: 'VolumeX',
    localizedDesc: {
      es: 'Elimina automáticamente silencios y pausas incómodas de audios y vídeos.',
      pt: 'Remova pausas e silêncios incômodos de áudio e vídeo automaticamente.',
      de: 'Automatisch Sprechpausen und Stille aus Video und Audio entfernen.',
      fr: 'Supprimez automatiquement les silences gênants de vos enregistrements.',
      ja: '音声や動画から無音・沈黙区間を自動検出して一括削除。',
      zh: '智能检测并自动剪除音视频中的空白停顿与无声片段。'
    }
  },
  {
    id: 'testmymic',
    name: 'TestMyMic',
    url: 'https://testmymic.github.io/',
    desc: 'Check microphone quality, input levels, and audio clarity.',
    category: 'video_and_audio',
    tags: ['mic', 'microphone', 'test', 'levels', 'audio', 'voice'],
    icon: 'Mic',
    localizedDesc: {
      es: 'Comprueba la calidad del micrófono, niveles de entrada y claridad.',
      pt: 'Teste o microfone, volume de entrada e clareza de áudio.',
      de: 'Mikrofonqualität, Lautstärkepegel und Klarheit testen.',
      fr: 'Testez la qualité de votre micro, les niveaux et la clarté.',
      ja: 'マイクの入力レベルや音質、反響をリアルタイムで診断テスト。',
      zh: '实时测试麦克风音质、输入音量分贝与拾音清晰度。'
    }
  },
  {
    id: 'video-to-audio',
    name: 'VideoToAudio',
    url: 'https://video-to-audio.github.io/',
    desc: 'Extract MP3/WAV audio tracks from video files.',
    category: 'video_and_audio',
    tags: ['extract', 'mp3', 'wav', 'audio', 'converter', 'soundtrack'],
    icon: 'FileAudio',
    localizedDesc: {
      es: 'Extrae pistas de audio en MP3 o WAV de cualquier vídeo.',
      pt: 'Extraia trilhas de áudio MP3/WAV de arquivos de vídeo.',
      de: 'MP3- und WAV-Audiospuren aus Videodateien extrahieren.',
      fr: 'Extrayez des pistes audio MP3 ou WAV de fichiers vidéo.',
      ja: '動画ファイルから高音質なMP3やWAV音声をワンクリック抽出。',
      zh: '从视频文件中无损提取 MP3 或 WAV 音轨。'
    }
  },
  {
    id: 'videotojpg',
    name: 'VideoToJPG',
    url: 'https://videotojpg.github.io/',
    desc: 'Extract high-resolution image frames from any video.',
    category: 'video_and_audio',
    tags: ['frame', 'jpg', 'extract', 'snapshot', 'capture', 'photo'],
    icon: 'Camera',
    localizedDesc: {
      es: 'Extrae fotogramas en alta resolución de cualquier archivo de vídeo.',
      pt: 'Extraia quadros de alta resolução de qualquer vídeo em JPG.',
      de: 'Hochauflösende Einzelbilder und Frames aus Videos extrahieren.',
      fr: 'Extrayez des images en haute résolution depuis n\'importe quelle vidéo.',
      ja: '動画の決定的な瞬間を高解像度JPG画像として切り出し。',
      zh: '逐帧截取并提取视频中的高清静态图片。'
    }
  },
  {
    id: 'voicetake',
    name: 'VoiceTake',
    url: 'https://voicetake.github.io/',
    desc: 'Record high-quality voiceovers and edit audio like text.',
    category: 'video_and_audio',
    tags: ['voice', 'recorder', 'voiceover', 'dictate', 'memo'],
    icon: 'AudioLines',
    localizedDesc: {
      es: 'Graba locuciones en alta calidad y gestiona tus notas de voz.',
      pt: 'Grave locuções de alta qualidade e anotações por voz.',
      de: 'Hochwertige Sprachaufnahmen erstellen und Audio bearbeiten.',
      fr: 'Enregistrez des voix off haute qualité et mémos vocaux.',
      ja: '高音質ボイスレコーディングと音声メモの保存ツール。',
      zh: '录制高清语音旁白、播客随记与口述备忘录。'
    }
  },
  {
    id: 'podeditor',
    name: 'PodEditor',
    url: 'https://podeditor.github.io/',
    desc: 'Zero-server podcast audio editor with auto silence stripper and vocal clarity master.',
    category: 'video_and_audio',
    tags: ['podcast', 'audio', 'silence', 'voice', 'editor', 'mp3', 'wav', 'mastering', 'vocal', 'cut'],
    icon: 'Headphones',
    badge: 'New',
    localizedDesc: {
      es: 'Editor de podcasts sin servidor con eliminación automática de silencios y ecualización de voz.',
      pt: 'Editor de podcasts sem servidor com remoção automática de pausas e masterização vocal.',
      de: 'Serverloser Podcast-Audioeditor mit automatischer Stille-Entfernung und Stimm-Mastering.',
      fr: 'Éditeur de podcast sans serveur avec suppression automatique des silences et mastering vocal.',
      ja: '無音区間の自動カットと高音質ボーカルマスタリングを備えたポッドキャスト編集ツール。',
      zh: '零服务器播客音频编辑器，支持智能自动静音消除与专业人声母带优化。'
    }
  },

  // ==========================================
  // 🖼️ Image & Design (11 tools)
  // ==========================================
  {
    id: 'bulk-bg-remover',
    name: 'BulkBgRemover',
    url: 'https://bulk-bg-remover.github.io/',
    desc: 'Remove backgrounds from multiple images at once locally.',
    category: 'image_and_design',
    tags: ['background', 'remove', 'transparent', 'batch', 'bulk', 'png'],
    icon: 'Wand2',
    badge: 'Popular',
    localizedDesc: {
      es: 'Elimina fondos de varias imágenes en lote de forma 100% local.',
      pt: 'Remova o fundo de várias imagens em lote no próprio dispositivo.',
      de: 'Hintergrund von mehreren Bildern gleichzeitig lokal entfernen.',
      fr: 'Supprimez l\'arrière-plan de plusieurs images en lot localement.',
      ja: 'ブラウザ内で複数画像の背景を一括自動透過・削除。',
      zh: '本地批量抠图，一键去除多张图片背景生成透明 PNG。'
    }
  },
  {
    id: 'bulkresize',
    name: 'BulkResize',
    url: 'https://bulkresize.github.io/',
    desc: 'Batch resize hundreds of images in seconds.',
    category: 'image_and_design',
    tags: ['resize', 'batch', 'scale', 'dimensions', 'bulk', 'photos'],
    icon: 'Scaling',
    localizedDesc: {
      es: 'Cambia el tamaño de cientos de imágenes por lotes en segundos.',
      pt: 'Redimensione centenas de imagens em lote em poucos segundos.',
      de: 'Hunderte Bilder gleichzeitig in Sekunden skalieren.',
      fr: 'Redimensionnez des centaines d\'images en lot en quelques secondes.',
      ja: '数百枚の画像サイズや解像度を瞬時に一括リサイズ。',
      zh: '秒级批量调整数百张图片的像素尺寸与百分比缩放。'
    }
  },
  {
    id: 'free-image-compressor',
    name: 'FreeImageCompressor',
    url: 'https://free-image-compressor.github.io/',
    desc: 'Compress PNG, JPG, and WebP images with zero uploads.',
    category: 'image_and_design',
    tags: ['compress', 'image', 'png', 'jpg', 'webp', 'optimize', 'shrink'],
    icon: 'ImageDown',
    badge: 'Popular',
    localizedDesc: {
      es: 'Comprime imágenes PNG, JPG y WebP sin subirlas a la red.',
      pt: 'Comprima imagens PNG, JPG e WebP sem enviar arquivos para a internet.',
      de: 'PNG-, JPG- und WebP-Bilder ohne Server-Uploads komprimieren.',
      fr: 'Compressez vos images PNG, JPG et WebP sans téléversement.',
      ja: 'サーバー送信なしでPNG/JPG/WebP画像の容量を大幅軽量化。',
      zh: '零服务器上传，本地深度无损压缩 PNG、JPG 与 WebP。'
    }
  },
  {
    id: 'hexhunt',
    name: 'HexHunt',
    url: 'https://hexhunt.github.io/',
    desc: 'Discover and curate color palettes for web design.',
    category: 'image_and_design',
    tags: ['color', 'palette', 'hex', 'design', 'game', 'curate'],
    icon: 'Palette',
    localizedDesc: {
      es: 'Descubre y organiza paletas de colores para tus diseños web.',
      pt: 'Descubra e organize paletas de cores modernas para web design.',
      de: 'Moderne Farbpaletten für Webdesign entdecken und zusammenstellen.',
      fr: 'Découvrez et organisez des palettes de couleurs pour le web.',
      ja: 'Webデザインに最適なカラーパレットを探索・収集するツール。',
      zh: '为网页与 UI 设计发掘、搭配与收藏精美配色方案。'
    }
  },
  {
    id: 'image2hex',
    name: 'Image2Hex',
    url: 'https://image2hex.github.io/',
    desc: 'Extract exact HEX color codes and palettes from any photo.',
    category: 'image_and_design',
    tags: ['hex', 'picker', 'color', 'extract', 'rgb', 'photo'],
    icon: 'Pipette',
    localizedDesc: {
      es: 'Extrae códigos HEX y paletas exactas de cualquier imagen.',
      pt: 'Extraia códigos HEX e paletas de cores exatas de fotos.',
      de: 'Exakte HEX-Farbcodes und Paletten aus Fotos extrahieren.',
      fr: 'Extrayez les codes couleur HEX et palettes de vos photos.',
      ja: '写真やイラストから正確なHEX/RGBカラーコードを抽出。',
      zh: '从任意图片中吸取精准 HEX/RGB 颜色代码并生成色卡。'
    }
  },
  {
    id: 'kids-draw',
    name: 'KidsDraw',
    url: 'https://kids-draw.github.io/',
    desc: 'Ad-free magic neon and rainbow drawing board for kids.',
    category: 'image_and_design',
    tags: ['draw', 'kids', 'neon', 'whiteboard', 'canvas', 'fun'],
    icon: 'Paintbrush',
    localizedDesc: {
      es: 'Pizarra de dibujo mágica con efecto neón y arcoíris para niños, sin anuncios.',
      pt: 'Lousa de desenho mágica neon e arco-íris para crianças, sem anúncios.',
      de: 'Werbefreie magische Neon- und Regenbogen-Zeichentafel für Kinder.',
      fr: 'Tableau de dessin néon et arc-en-ciel magique pour enfants, sans pub.',
      ja: '完全広告なし、子供向けの光るネオン＆レインボーお絵描きボード。',
      zh: '无广告的儿童魔法荧光与彩虹画板，纯净富有趣味。'
    }
  },
  {
    id: 'makecharts',
    name: 'MakeCharts',
    url: 'https://makecharts.github.io/',
    desc: 'Create clean, downloadable data charts and graphs.',
    category: 'image_and_design',
    tags: ['charts', 'graphs', 'bar', 'pie', 'data', 'visualization', 'export'],
    icon: 'BarChart3',
    badge: 'Popular',
    localizedDesc: {
      es: 'Crea gráficos y diagramas de datos limpios y descargables.',
      pt: 'Crie belos gráficos e tabelas de dados prontos para download.',
      de: 'Klare, exportierbare Datendiagramme und Grafiken erstellen.',
      fr: 'Créez des graphiques de données clairs et téléchargeables.',
      ja: '円グラフや棒グラフなど美しいデータ可視化図を即座に作成・保存。',
      zh: '轻量快速制作柱状图、折线图与饼图并导出高清图片。'
    }
  },
  {
    id: 'makegif',
    name: 'MakeGIF',
    url: 'https://makegif.github.io/',
    desc: 'Convert videos or image sequences into animated GIFs.',
    category: 'image_and_design',
    tags: ['gif', 'animation', 'convert', 'video2gif', 'frames'],
    icon: 'FileImage',
    localizedDesc: {
      es: 'Convierte vídeos o secuencias de imágenes en GIFs animados.',
      pt: 'Converta vídeos ou sequências de imagens em GIFs animados.',
      de: 'Videos oder Bilderserien in animierte GIFs umwandeln.',
      fr: 'Convertissez vidéos ou photos en animations GIF.',
      ja: '動画や複数枚の連続写真からアニメーションGIFを生成。',
      zh: '将短视频或多张连续照片一键转换制作为动态 GIF。'
    }
  },
  {
    id: 'makepng',
    name: 'MakePNG',
    url: 'https://makepng.github.io/',
    desc: 'Convert images to crisp transparent PNG format.',
    category: 'image_and_design',
    tags: ['png', 'convert', 'transparent', 'format', 'image'],
    icon: 'Image',
    localizedDesc: {
      es: 'Convierte imágenes a formato PNG con soporte para transparencias.',
      pt: 'Converta imagens para o formato PNG com transparência nítida.',
      de: 'Bilder in gestochen scharfe transparente PNGs konvertieren.',
      fr: 'Convertissez vos images au format PNG avec transparence.',
      ja: '各種画像を透明度を保持した高品質PNGフォーマットへ変換。',
      zh: '将各类图片无损转换为支持透明背景的锐利 PNG 格式。'
    }
  },
  {
    id: 'profilepic-resizer',
    name: 'ProfilePicResizer',
    url: 'https://profilepic-resizer.github.io/',
    desc: 'Fit full photos into circular social media profile pictures.',
    category: 'image_and_design',
    tags: ['avatar', 'crop', 'circle', 'profile', 'instagram', 'avatar'],
    icon: 'UserCheck',
    localizedDesc: {
      es: 'Ajusta fotos completas a marcos circulares para redes sociales.',
      pt: 'Ajuste fotos inteiras em avatares circulares para redes sociais.',
      de: 'Fotos perfekt für runde Social-Media-Profilbilder anpassen.',
      fr: 'Ajustez des photos complètes en avatars circulaires parfaits.',
      ja: 'SNSの丸型アイコンに写真が見切れずぴったり収まるリサイザー。',
      zh: '完整将方形/长图适配到社交平台圆形头像框，防止截断。'
    }
  },
  {
    id: 'upscaleimage',
    name: 'UpscaleImage',
    url: 'https://upscaleimage.github.io/',
    desc: 'Enhance and upscale image resolution in your browser.',
    category: 'image_and_design',
    tags: ['upscale', 'enhance', 'resolution', 'clarity', 'hd'],
    icon: 'Maximize',
    badge: 'AI Powered',
    localizedDesc: {
      es: 'Mejora y aumenta la resolución de tus imágenes en el navegador.',
      pt: 'Aumente e melhore a resolução de imagens no navegador.',
      de: 'Bildauflösung und Schärfe direkt im Browser verbessern.',
      fr: 'Améliorez et augmentez la résolution d\'image dans le navigateur.',
      ja: 'ブラウザ内で画像の解像度と鮮明度をアップスケール向上。',
      zh: '在浏览器端超分辨率放大并增强图片细节清晰度。'
    }
  },

  // ==========================================
  // 📄 PDF & Documents (10 tools)
  // ==========================================
  {
    id: 'drawonpdf',
    name: 'DrawOnPDF',
    url: 'https://drawonpdf.github.io/',
    desc: 'Highlight, annotate, and draw directly on PDF files.',
    category: 'pdf_and_documents',
    tags: ['pdf', 'draw', 'annotate', 'highlight', 'notes', 'pen'],
    icon: 'Highlighter',
    localizedDesc: {
      es: 'Resalta, anota y dibuja a mano alzada directamente sobre PDFs.',
      pt: 'Destaque, anote e desenhe à mão livre em arquivos PDF.',
      de: 'Direkt in PDF-Dateien zeichnen, markieren und Notizen machen.',
      fr: 'Surlignez, annotez et dessinez directement sur vos fichiers PDF.',
      ja: 'PDFファイルに直接手描き描画、蛍光ペンマーカー、注釈を追加。',
      zh: '直接在 PDF 文档上自由涂鸦划线、高亮重点与批注笔记。'
    }
  },
  {
    id: 'editpdf',
    name: 'EditPDF',
    url: 'https://editpdf.github.io/',
    desc: 'Modify text, pages, and layouts inside PDF documents.',
    category: 'pdf_and_documents',
    tags: ['pdf', 'edit', 'text', 'pages', 'organize', 'modify'],
    icon: 'FileEdit',
    badge: 'Popular',
    localizedDesc: {
      es: 'Modifica textos, páginas y diseño dentro de documentos PDF.',
      pt: 'Modifique textos, páginas e layouts dentro de documentos PDF.',
      de: 'Texte, Seiten und Layouts in PDF-Dokumenten bearbeiten.',
      fr: 'Modifiez textes, pages et mises en page dans vos documents PDF.',
      ja: 'PDFのテキスト追加・ページ並び替え・レイアウト編集ツール。',
      zh: '在线修改 PDF 页面文字、重排顺序与删除多余页码。'
    }
  },
  {
    id: 'free-pdf-editor',
    name: 'FreePDFEditor',
    url: 'https://free-pdf-editor-online.github.io/',
    desc: 'Complete client-side PDF editing suite with zero uploads.',
    category: 'pdf_and_documents',
    tags: ['pdf', 'editor', 'suite', 'client-side', 'zero-upload'],
    icon: 'FileText',
    badge: 'Essential',
    localizedDesc: {
      es: 'Suite completa de edición de PDF en el navegador sin subir archivos.',
      pt: 'Suíte completa de edição de PDF 100% no navegador e segura.',
      de: 'Vollständige PDF-Editor-Suite ohne jegliche Server-Uploads.',
      fr: 'Suite complète d\'édition de PDF côté client sans téléversement.',
      ja: 'サーバー送信不要、ブラウザ上で完結する総合PDF編集ツール。',
      zh: '零服务器上传、全功能纯前端本地 PDF 综合编辑器。'
    }
  },
  {
    id: 'free-signature',
    name: 'FreeSignature',
    url: 'https://free-signature-online.github.io/',
    desc: 'Draw and download transparent digital signatures.',
    category: 'pdf_and_documents',
    tags: ['sign', 'signature', 'draw', 'transparent', 'png', 'contracts'],
    icon: 'PenTool',
    badge: 'Popular',
    localizedDesc: {
      es: 'Dibuja y descarga firmas digitales con fondo transparente.',
      pt: 'Desenhe e baixe sua assinatura digital com fundo transparente.',
      de: 'Digitale Unterschriften zeichnen und transparent als PNG laden.',
      fr: 'Dessinez et téléchargez votre signature numérique transparente.',
      ja: '背景透過のデジタル手書きサインを簡単に描画＆PNG保存。',
      zh: '在线手写绘制并免费下载透明背景 PNG 电子签名图片。'
    }
  },
  {
    id: 'image2pdf',
    name: 'Image2PDF',
    url: 'https://image2pdf.github.io/',
    desc: 'Combine multiple JPG and PNG photos into a single PDF.',
    category: 'pdf_and_documents',
    tags: ['convert', 'jpg2pdf', 'png2pdf', 'images', 'pdf', 'combine'],
    icon: 'FileSpreadsheet',
    localizedDesc: {
      es: 'Convierte y combina múltiples fotos JPG y PNG en un único PDF.',
      pt: 'Junte múltiplas fotos JPG e PNG em um arquivo PDF único.',
      de: 'Mehrere JPG- und PNG-Bilder in ein einziges PDF zusammenführen.',
      fr: 'Combinez plusieurs photos JPG et PNG en un seul document PDF.',
      ja: '複数のJPG/PNG画像を一括で整理された1つのPDFに変換。',
      zh: '批量将多张 JPG 与 PNG 照片合并整理为一份单页/多页 PDF。'
    }
  },
  {
    id: 'mergepdfs',
    name: 'MergePDFs',
    url: 'https://mergepdfs.github.io/',
    desc: 'Join multiple PDF documents into one organized file.',
    category: 'pdf_and_documents',
    tags: ['merge', 'pdf', 'combine', 'join', 'documents', 'collate'],
    icon: 'Files',
    badge: 'Popular',
    localizedDesc: {
      es: 'Une múltiples documentos PDF en un solo archivo organizado.',
      pt: 'Junte múltiplos documentos PDF em um único arquivo ordenado.',
      de: 'Mehrere PDF-Dokumente zu einer geordneten Datei zusammenfügen.',
      fr: 'Fusionnez plusieurs documents PDF en un fichier organisé.',
      ja: '複数のPDF文書をドラッグ＆ドロップで順番通りに結合。',
      zh: '将多份独立的 PDF 文档按指定顺序无缝合并为单个文件。'
    }
  },
  {
    id: 'pdfcompressor',
    name: 'PDFCompressor',
    url: 'https://pdfcompressor.github.io/',
    desc: 'Shrink PDF file sizes locally while keeping text sharp.',
    category: 'pdf_and_documents',
    tags: ['compress', 'pdf', 'shrink', 'filesize', 'document', 'optimize'],
    icon: 'FileDown',
    badge: 'Popular',
    localizedDesc: {
      es: 'Reduce el peso de archivos PDF localmente manteniendo textos nítidos.',
      pt: 'Diminua o tamanho de arquivos PDF mantendo o texto nítido.',
      de: 'PDF-Dateigröße lokal verringern bei gestochen scharfem Text.',
      fr: 'Réduisez la taille de vos PDF localement tout en gardant un texte net.',
      ja: '文字の鮮明さを保ちながら大容量PDFのファイルサイズを圧縮。',
      zh: '本地深度压缩 PDF 体积，文字依然清晰锐利不模糊。'
    }
  },
  {
    id: 'pdfsigner',
    name: 'PDFSigner',
    url: 'https://pdfsigner.github.io/',
    desc: 'Sign PDF contracts and documents securely in-browser.',
    category: 'pdf_and_documents',
    tags: ['sign', 'contract', 'nda', 'document', 'signature', 'pdf'],
    icon: 'Signature',
    localizedDesc: {
      es: 'Firma contratos y documentos PDF de forma segura en tu navegador.',
      pt: 'Assine contratos e documentos PDF com segurança no navegador.',
      de: 'Verträge und PDF-Dokumente sicher direkt im Browser signieren.',
      fr: 'Signez contrats et documents PDF en toute sécurité dans le navigateur.',
      ja: '契約書や申請書PDFにブラウザ上で安全に電子サインを押印。',
      zh: '无需打印，在浏览器中直接对 PDF 合同与协议进行安全电子签署。'
    }
  },
  {
    id: 'excel-viewer',
    name: 'ExcelViewer',
    url: 'https://excel-viewer-online.github.io/',
    desc: 'Preview and inspect XLSX and CSV spreadsheets online.',
    category: 'pdf_and_documents',
    tags: ['excel', 'xlsx', 'csv', 'viewer', 'spreadsheet', 'table'],
    icon: 'Table',
    localizedDesc: {
      es: 'Visualiza e inspecciona hojas de cálculo XLSX y CSV sin Office.',
      pt: 'Visualize e inspecione planilhas XLSX e CSV sem precisar do Office.',
      de: 'XLSX- und CSV-Tabellen ohne Microsoft Office online ansehen.',
      fr: 'Prévisualisez des feuilles de calcul XLSX et CSV sans Office.',
      ja: 'OfficeなしでXLSXやCSVスプレッドシートを即座に閲覧・確認。',
      zh: '无需安装 Office 软件，直接在线快速预览与查看 XLSX 和 CSV 表格。'
    }
  },
  {
    id: 'extracttext',
    name: 'ExtractText',
    url: 'https://extracttext.github.io/',
    desc: 'Extract readable text from images and scanned documents.',
    category: 'pdf_and_documents',
    tags: ['ocr', 'text', 'extract', 'scan', 'image2text', 'document'],
    icon: 'ScanText',
    badge: 'OCR',
    localizedDesc: {
      es: 'Extrae texto seleccionable de imágenes y documentos escaneados.',
      pt: 'Extraia texto legível de fotos e documentos digitalizados por OCR.',
      de: 'Texte aus Bildern und gescannten Dokumenten per OCR extrahieren.',
      fr: 'Extrayez le texte d\'images et documents numérisés via OCR.',
      ja: '画像やスキャン文書からOCR技術で文字を高精度テキスト抽出。',
      zh: '基于浏览器 OCR 识别，快速提取图片与扫描件中的文字。'
    }
  },

  // ==========================================
  // 🚀 Productivity & Wellness (11 tools)
  // ==========================================
  {
    id: 'box-breathe',
    name: 'BoxBreathe',
    url: 'https://box-breathe.github.io/',
    desc: '4-4-4-4 visual box breathing timer for focus and calm.',
    category: 'productivity_and_wellness',
    tags: ['breathe', 'meditation', 'calm', 'focus', 'wellness', 'relax'],
    icon: 'Heart',
    badge: 'Wellness',
    localizedDesc: {
      es: 'Temporizador visual de respiración cuadrada 4-4-4-4 para reducir el estrés.',
      pt: 'Timer visual de respiração 4-4-4-4 para foco, calma e bem-estar.',
      de: 'Visueller 4-4-4-4 Box-Breathing Timer für Ruhe und Konzentration.',
      fr: 'Minuteur visuel de respiration carrée 4-4-4-4 pour le calme et le focus.',
      ja: '4-4-4-4秒のリズムで集中とリラックスをもたらすボックス呼吸タイマー。',
      zh: '4-4-4-4 箱式呼吸视觉节奏引导器，助您迅速缓解焦虑、恢复专注。'
    }
  },
  {
    id: 'browser-journal',
    name: 'BrowserJournal',
    url: 'https://browser-journal.github.io/',
    desc: '100% private daily diary stored locally on your device.',
    category: 'productivity_and_wellness',
    tags: ['journal', 'diary', 'notes', 'private', 'markdown', 'offline'],
    icon: 'BookOpen',
    localizedDesc: {
      es: 'Diario personal 100% privado almacenado localmente en tu dispositivo.',
      pt: 'Diário pessoal 100% privado guardado localmente no seu dispositivo.',
      de: '100% privates Tagebuch, lokal auf Ihrem Gerät gespeichert.',
      fr: 'Journal intime 100% privé stocké localement sur votre appareil.',
      ja: '外部送信なし、ブラウザローカルに完全保存されるプライベート日記。',
      zh: '100% 私密日记本，内容全加密保存在本地设备存储中。'
    }
  },
  {
    id: 'habit-grid',
    name: 'HabitGrid',
    url: 'https://habit-grid.github.io/',
    desc: '365-day GitHub-style visual contribution habit tracker.',
    category: 'productivity_and_wellness',
    tags: ['habits', 'tracker', 'github-style', 'goals', 'streaks', 'consistency'],
    icon: 'Grid',
    badge: 'Popular',
    localizedDesc: {
      es: 'Rastreador de hábitos anual estilo matriz de GitHub para crear rachas.',
      pt: 'Rastreador de hábitos estilo GitHub com matriz de 365 dias.',
      de: '365-Tage Gewohnheits-Tracker im GitHub-Beitragsgitter-Stil.',
      fr: 'Suivi d\'habitudes sur 365 jours inspiré de la matrice de GitHub.',
      ja: 'GitHubの草スタイルの365日マトリックスで習慣化を継続トラッキング。',
      zh: 'GitHub 提交热力图风格的 365 天习惯打卡与打卡连胜追踪器。'
    }
  },
  {
    id: 'online-note',
    name: 'OnlineNote',
    url: 'https://online-note.github.io/',
    desc: 'Fast distraction-free notepad with instant local autosave.',
    category: 'productivity_and_wellness',
    tags: ['notepad', 'notes', 'autosave', 'scratchpad', 'words', 'minimal'],
    icon: 'StickyNote',
    localizedDesc: {
      es: 'Bloc de notas sin distracciones con guardado automático local instantáneo.',
      pt: 'Bloco de notas limpo com salvamento automático local instantâneo.',
      de: 'Ablenkungsfreies Notizbuch mit sofortiger automatischer Speicherung.',
      fr: 'Bloc-notes minimaliste avec sauvegarde automatique locale instantanée.',
      ja: '自動ローカル保存付き、余計な機能のない極小メモ帳。',
      zh: '极简无干扰在线便签草稿纸，输入即自动保存至本地。'
    }
  },
  {
    id: 'content30',
    name: 'Content30',
    url: 'https://content30.github.io/',
    desc: 'Plan and organize 30 days of social media content.',
    category: 'productivity_and_wellness',
    tags: ['content', 'social-media', 'planner', 'calendar', 'marketing', '30days'],
    icon: 'Calendar',
    localizedDesc: {
      es: 'Planifica y organiza 30 días de contenido para tus redes sociales.',
      pt: 'Planeje e organize 30 dias de conteúdo para redes sociais.',
      de: '30 Tage Social-Media-Inhalte strategisch planen und organisieren.',
      fr: 'Planifiez et organisez 30 jours de contenus pour réseaux sociaux.',
      ja: 'SNS発信のネタとスケジュールを30日分効率的にプランニング。',
      zh: '系统化规划与排期未来30天的社交媒体内容日历与创意。'
    }
  },
  {
    id: 'postqueue',
    name: 'PostQueue',
    url: 'https://postqueue.github.io/',
    desc: 'Organize and queue upcoming social media posts.',
    category: 'productivity_and_wellness',
    tags: ['queue', 'social', 'posts', 'twitter', 'linkedin', 'drafts'],
    icon: 'ListOrdered',
    localizedDesc: {
      es: 'Organiza y pon en cola tus próximas publicaciones sociales.',
      pt: 'Organize e enfileire suas próximas postagens em redes sociais.',
      de: 'Kommende Social-Media-Beiträge übersichtlich in Warteschlangen organisieren.',
      fr: 'Organisez et mettez en file d\'attente vos publications sociales.',
      ja: '投稿予定のSNSテキストやツイート草案をキュー管理。',
      zh: '草拟、排序并管理即将发布到各社交平台的推文队列。'
    }
  },
  {
    id: 'captionlk',
    name: 'CaptionLK',
    url: 'https://captionlk.github.io/',
    desc: 'Generate engaging captions and hooks for social videos.',
    category: 'productivity_and_wellness',
    tags: ['captions', 'hooks', 'tiktok', 'reels', 'youtube', 'hashtags'],
    icon: 'Sparkle',
    localizedDesc: {
      es: 'Genera ganchos y subtítulos atractivos para tus vídeos cortos.',
      pt: 'Gere legendas cativantes e ganchos para vídeos em redes sociais.',
      de: 'Fesselnde Bildunterschriften und Hooks für Social-Media-Videos erstellen.',
      fr: 'Générez des accroches et légendes captivantes pour vos vidéos.',
      ja: 'ショート動画やSNS用の引きつけるキャプション＆フック文章ジェネレーター。',
      zh: '为短视频与社媒图文一键生成吸引眼球的文案钩子与标题。'
    }
  },
  {
    id: 'promptjot',
    name: 'PromptJot',
    url: 'https://promptjot.github.io/',
    desc: 'Save, organize, and copy your best AI prompts.',
    category: 'productivity_and_wellness',
    tags: ['prompts', 'ai', 'chatgpt', 'claude', 'library', 'organizer'],
    icon: 'Bot',
    badge: 'Popular',
    localizedDesc: {
      es: 'Guarda, organiza y copia rápidamente tus mejores prompts de IA.',
      pt: 'Salve, organize e copie facilmente seus melhores prompts de IA.',
      de: 'Ihre besten KI-Prompts strukturiert speichern, verwalten und kopieren.',
      fr: 'Enregistrez, organisez et copiez vos meilleurs prompts d\'IA.',
      ja: 'ChatGPTやClaude等で使える優秀なAIプロンプトを整理・ストック。',
      zh: '分类收藏、调试并一键复制您最得心应手的 AI 提示词库。'
    }
  },
  {
    id: 'digital-gift',
    name: 'DigitalGift',
    url: 'https://digital-gift.github.io/',
    desc: 'Create and share custom interactive virtual gifts via link.',
    category: 'productivity_and_wellness',
    tags: ['gift', 'birthday', 'surprise', 'interactive', 'voucher', 'card'],
    icon: 'Gift',
    localizedDesc: {
      es: 'Crea y comparte regalos virtuales interactivos personalizados por enlace.',
      pt: 'Crie e compartilhe presentes virtuais interativos através de um link.',
      de: 'Personalisierte, interaktive digitale Geschenke per Link teilen.',
      fr: 'Créez et partagez des cadeaux virtuels interactifs par simple lien.',
      ja: '誕生日やお祝いに贈るインタラクティブなサプライズWebギフト作成。',
      zh: '制作带有动画交互与专属祝福的趣味虚拟数字礼物链接。'
    }
  },
  {
    id: 'match-board',
    name: 'MatchBoard',
    url: 'https://match-board.github.io/',
    desc: 'Pro digital scoreboard with OBS broadcast overlay mode.',
    category: 'productivity_and_wellness',
    tags: ['scoreboard', 'sports', 'games', 'obs', 'stream', 'points'],
    icon: 'Trophy',
    localizedDesc: {
      es: 'Marcador digital profesional con modo superposición para OBS y streams.',
      pt: 'Placar digital profissional com modo overlay para transmissão no OBS.',
      de: 'Professionelle digitale Anzeigetafel mit OBS-Overlay-Modus.',
      fr: 'Tableau d\'affichage numérique pro avec mode incrustation OBS.',
      ja: 'OBS配信オーバーレイ対応の本格デジタル得点板・スコアボード。',
      zh: '支持 OBS 直播透明推流覆层的专业数字比赛计分板。'
    }
  },
  {
    id: 'forgeenergy',
    name: 'ForgeEnergy',
    url: 'https://forgeenergy.github.io/',
    desc: 'Daily energy, focus, and routine optimization tracker.',
    category: 'productivity_and_wellness',
    tags: ['energy', 'focus', 'routine', 'wellness', 'productivity', 'habits'],
    icon: 'Zap',
    localizedDesc: {
      es: 'Rastreador de energía diaria, concentración y optimización de rutinas.',
      pt: 'Rastreador de energia, foco e rotinas diárias para produtividade.',
      de: 'Täglicher Tracker für Energie, Fokus und Routineoptimierung.',
      fr: 'Suivi de l\'énergie quotidienne, du focus et des routines.',
      ja: '1日の活力・集中度・生活リズムを可視化するエナジートラッカー。',
      zh: '日常精力状态、专注度与作息习惯优化量化记录工具。'
    }
  },

  // ==========================================
  // 💻 Dev & Finance (18 tools)
  // ==========================================
  {
    id: 'clone-link',
    name: 'CloneLink',
    url: 'https://clone-link.github.io/',
    desc: 'Generate chained Git clone commands and download subfolders.',
    category: 'dev_finance_and_utility',
    tags: ['git', 'clone', 'github', 'subfolder', 'developer', 'cli'],
    icon: 'GitFork',
    localizedDesc: {
      es: 'Genera comandos Git clone encadenados y descarga subcarpetas.',
      pt: 'Gere comandos Git clone encadeados e baixe subpastas de repositórios.',
      de: 'Verkettete Git-Clone-Befehle generieren und Unterordner herunterladen.',
      fr: 'Générez des commandes Git clone et téléchargez des sous-dossiers.',
      ja: 'GitHub特定サブフォルダの直接取得やGitクローンコマンド生成。',
      zh: '快速生成 Git 递归克隆指令，或直接单独下载 GitHub 仓库指定子目录。'
    }
  },
  {
    id: 'json2excel',
    name: 'JSON2Excel',
    url: 'https://json2excel.github.io/',
    desc: 'Convert nested JSON data into clean Excel/CSV files.',
    category: 'dev_finance_and_utility',
    tags: ['json', 'excel', 'csv', 'converter', 'developer', 'export'],
    icon: 'FileJson',
    badge: 'Popular',
    localizedDesc: {
      es: 'Convierte datos JSON anidados en archivos limpios de Excel o CSV.',
      pt: 'Converta dados JSON aninhados em planilhas limpas de Excel/CSV.',
      de: 'Verschachtelte JSON-Daten in saubere Excel- oder CSV-Dateien umwandeln.',
      fr: 'Convertissez des données JSON imbriquées en fichiers Excel/CSV propres.',
      ja: '複雑な階層のJSONデータを整ったExcel/CSVスプレッドシートに変換。',
      zh: '将多层嵌套或扁平的 JSON 数据直接转换为格式规整的 Excel/CSV。'
    }
  },
  {
    id: 'encryptfile',
    name: 'EncryptFile',
    url: 'https://encryptfile.github.io/',
    desc: 'Password-protect and encrypt files using Web Crypto.',
    category: 'dev_finance_and_utility',
    tags: ['encrypt', 'security', 'crypto', 'password', 'aes256', 'privacy'],
    icon: 'Lock',
    badge: 'Security',
    localizedDesc: {
      es: 'Protege y cifra archivos con contraseña utilizando Web Crypto AES-256.',
      pt: 'Proteja e criptografe arquivos com senha usando a API Web Crypto.',
      de: 'Dateien mit Passwort über moderne Web Crypto (AES-256) sicher verschlüsseln.',
      fr: 'Chiffrez et protégez vos fichiers par mot de passe avec Web Crypto.',
      ja: 'Web Crypto API（AES-256）による安全なブラウザ内ファイル暗号化。',
      zh: '使用 Web Crypto API 与 AES-256 在浏览器本地对任意文件进行高强度加密。'
    }
  },
  {
    id: 'createqr',
    name: 'CreateQR',
    url: 'https://createqr.github.io/',
    desc: 'Instant custom QR code generator for links and text.',
    category: 'dev_finance_and_utility',
    tags: ['qr', 'generator', 'code', 'link', 'custom', 'download'],
    icon: 'QrCode',
    localizedDesc: {
      es: 'Generador instantáneo de códigos QR personalizados para enlaces y texto.',
      pt: 'Gerador instantâneo de códigos QR personalizados para links e texto.',
      de: 'Sofortige Erstellung benutzerdefinierter QR-Codes für Links und Text.',
      fr: 'Générateur instantané de codes QR personnalisés pour liens et textes.',
      ja: 'URLやテキストから即座にデザインQRコードを生成・ダウンロード。',
      zh: '输入链接或文字，即刻生成可自定义样式的清晰二维码。'
    }
  },
  {
    id: 'free-qr-code-generator',
    name: 'FreeQRGenerator',
    url: 'https://free-qr-code-generator-online.github.io/',
    desc: 'Create high-resolution downloadable QR codes for free.',
    category: 'dev_finance_and_utility',
    tags: ['qr', 'hd', 'print', 'svg', 'business', 'vector'],
    icon: 'QrCode',
    badge: 'Popular',
    localizedDesc: {
      es: 'Crea códigos QR en alta resolución descargables en formatos vectoriales.',
      pt: 'Crie códigos QR em alta resolução para impressão e links.',
      de: 'Hochauflösende QR-Codes für Druck und Web kostenlos erstellen.',
      fr: 'Créez gratuitement des codes QR haute résolution à imprimer.',
      ja: '印刷やビジネス利用にも耐えうる高解像度ベクターQRコード生成。',
      zh: '免费生成可用于印刷与排版的高分辨率矢量 SVG/PNG 二维码。'
    }
  },
  {
    id: 'seo-tools',
    name: 'SEOOnlineTools',
    url: 'https://seo-online-tools.github.io/',
    desc: 'Essential client-side utilities for technical SEO.',
    category: 'dev_finance_and_utility',
    tags: ['seo', 'meta', 'serp', 'keywords', 'audit', 'developer'],
    icon: 'SearchCheck',
    localizedDesc: {
      es: 'Utilidades esenciales del lado del cliente para auditoría SEO técnica.',
      pt: 'Ferramentas essenciais no cliente para auditoria e SEO técnico.',
      de: 'Wichtige client-seitige Werkzeuge für technisches SEO und Meta-Tags.',
      fr: 'Utilitaires essentiels côté client pour le référencement technique (SEO).',
      ja: 'メタタグ確認やキーワード密度チェックなどSEO技術者向け便利ツール。',
      zh: '纯前端运行的网页元标签分析、SERP 预览与技术 SEO 诊断工具。'
    }
  },
  {
    id: 'wadirect',
    name: 'WADirect',
    url: 'https://wadirect.github.io/',
    desc: 'Send WhatsApp messages directly without saving numbers.',
    category: 'dev_finance_and_utility',
    tags: ['whatsapp', 'chat', 'direct', 'phone', 'messaging'],
    icon: 'MessageSquare',
    badge: 'Popular',
    localizedDesc: {
      es: 'Inicia chats de WhatsApp directamente sin guardar números en contactos.',
      pt: 'Inicie conversas no WhatsApp diretamente sem precisar salvar o contato.',
      de: 'WhatsApp-Chats direkt öffnen, ohne die Telefonnummer speichern zu müssen.',
      fr: 'Ouvrez une discussion WhatsApp directement sans enregistrer le numéro.',
      ja: '連絡先登録不要で、電話番号を入力して即座にWhatsAppチャットを開始。',
      zh: '无需在手机通讯录中存号码，一键直接发起 WhatsApp 聊天对话。'
    }
  },
  {
    id: 'bulkinvoice',
    name: 'BulkInvoice',
    url: 'https://bulkinvoice.github.io/',
    desc: 'Generate multiple professional PDF invoices in bulk.',
    category: 'dev_finance_and_utility',
    tags: ['invoice', 'billing', 'finance', 'pdf', 'bulk', 'freelance'],
    icon: 'Receipt',
    badge: 'Business',
    localizedDesc: {
      es: 'Genera múltiples facturas profesionales en PDF por lotes.',
      pt: 'Gere faturas e recibos profissionais em PDF em lote.',
      de: 'Professionelle PDF-Rechnungen in Serie erstellen und exportieren.',
      fr: 'Générez des factures professionnelles en PDF en lot.',
      ja: '複数のフリーランス・取引先向けPDF請求書を一括作成＆発行。',
      zh: '批量生成并导出规范的专业 PDF 账单与商业发票凭证。'
    }
  },
  {
    id: 'loancal',
    name: 'LoanCal',
    url: 'https://loancal.github.io/',
    desc: 'Calculate monthly EMI, interest, and loan amortization.',
    category: 'dev_finance_and_utility',
    tags: ['loan', 'emi', 'mortgage', 'interest', 'amortization', 'finance'],
    icon: 'Calculator',
    localizedDesc: {
      es: 'Calcula cuotas mensuales (EMI), intereses y tablas de amortización.',
      pt: 'Calcule parcelas mensais (EMI), juros e tabela de amortização de empréstimos.',
      de: 'Monatliche Kreditraten, Zinsen und Tilgungspläne berechnen.',
      fr: 'Calculez vos mensualités de prêt, intérêts et tableau d\'amortissement.',
      ja: '住宅ローンや融資の月々返済額（EMI）、利息総額、元利均等償還計算。',
      zh: '精准计算房贷与车贷月供 EMI、利息支出与全周期还款明细表。'
    }
  },
  {
    id: 'rentvsbuy',
    name: 'RentVsBuy',
    url: 'https://rentvsbuy.github.io/',
    desc: 'Compare the financial breakdown of renting vs buying.',
    category: 'dev_finance_and_utility',
    tags: ['rent', 'buy', 'real-estate', 'investment', 'finance', 'calculator'],
    icon: 'Home',
    localizedDesc: {
      es: 'Compara detalladamente el impacto financiero de alquilar vs comprar vivienda.',
      pt: 'Compare os custos e o retorno financeiro entre alugar e comprar um imóvel.',
      de: 'Finanziellen Vergleich zwischen Mieten und Kaufen berechnen.',
      fr: 'Comparez le bilan financier entre louer ou acheter un logement.',
      ja: '賃貸暮らしとマイホーム購入の長期的な資産形成・総費用を徹底比較。',
      zh: '全维度推演对比租房投资与买房置业的长期资产净值与财务回报。'
    }
  },
  {
    id: 'taxtally',
    name: 'TaxTally',
    url: 'https://taxtally.github.io/',
    desc: 'Quick tax estimation and take-home pay calculator.',
    category: 'dev_finance_and_utility',
    tags: ['tax', 'salary', 'income', 'net', 'paycheck', 'finance'],
    icon: 'BadgePercent',
    localizedDesc: {
      es: 'Estimación rápida de impuestos y cálculo de salario neto real.',
      pt: 'Estimativa rápida de impostos e cálculo do salário líquido final.',
      de: 'Schnelle Steuerschätzung und Nettogehalt-Berechnung.',
      fr: 'Estimation rapide des impôts et calcul du salaire net réel.',
      ja: '所得税控除や手取り給与額を素早く試算できるタックスシミュレーター。',
      zh: '速算个人所得税税率阶梯、五险一金扣除及实际到手薪资。'
    }
  },
  {
    id: 'calculatecgpa',
    name: 'CalculateCGPA',
    url: 'https://calculatecgpa.github.io/',
    desc: 'Fast semester GPA and cumulative CGPA calculator.',
    category: 'dev_finance_and_utility',
    tags: ['cgpa', 'gpa', 'grades', 'college', 'university', 'student'],
    icon: 'GraduationCap',
    localizedDesc: {
      es: 'Calcula tu GPA semestral y CGPA acumulado de forma rápida y sencilla.',
      pt: 'Calcule seu GPA do semestre e CGPA acadêmico acumulado.',
      de: 'Schneller Noten- und CGPA-Rechner für Studium und Semester.',
      fr: 'Calculateur rapide de moyenne semestrielle (GPA) et cumulative (CGPA).',
      ja: '大学のセメスターGPAおよび通算CGPA成績を簡単シミュレーション。',
      zh: '快速核算各学期学分绩点 GPA 与大学全阶段累计 CGPA。'
    }
  },
  {
    id: 'trueage',
    name: 'TrueAge',
    url: 'https://trueage.github.io/',
    desc: 'Calculate exact chronological age down to days and hours.',
    category: 'dev_finance_and_utility',
    tags: ['age', 'birthday', 'chronological', 'calculator', 'days', 'time'],
    icon: 'Hourglass',
    localizedDesc: {
      es: 'Calcula tu edad cronológica exacta hasta en días, horas y minutos.',
      pt: 'Calcule sua idade cronológica exata em anos, dias e horas.',
      de: 'Exaktes chronologisches Alter auf Tage, Stunden und Minuten berechnen.',
      fr: 'Calculez votre âge chronologique exact en jours et heures.',
      ja: '生年月日から経過日数・時間・次の誕生日までの正確な実年齢を計算。',
      zh: '精确换算从出生至今的年、月、天、小时数与下次生日倒计时。'
    }
  },
  {
    id: 'truebmi',
    name: 'TrueBMI',
    url: 'https://truebmi.github.io/',
    desc: 'Check Body Mass Index and healthy weight ranges.',
    category: 'dev_finance_and_utility',
    tags: ['bmi', 'weight', 'health', 'oxford-bmi', 'fitness', 'metrics'],
    icon: 'Activity',
    badge: 'Popular',
    localizedDesc: {
      es: 'Calcula el Índice de Masa Corporal (IMC) y rangos de peso saludable.',
      pt: 'Verifique o Índice de Massa Corporal (IMC) e faixas de peso ideal.',
      de: 'Body-Mass-Index (BMI) und gesunde Gewichtsbereiche ermitteln.',
      fr: 'Vérifiez votre indice de masse corporelle (IMC) et poids idéal.',
      ja: '標準式およびオックスフォード新式対応のBMIと適正体重レンジ計算。',
      zh: '基于标准公式与牛津新公式测算 BMI 体质指数与健康目标体重。'
    }
  },
  {
    id: 'slgoviq',
    name: 'SLGovIQ',
    url: 'https://slgoviq.github.io/',
    desc: 'Multilingual competitive exam IQ and aptitude practice.',
    category: 'dev_finance_and_utility',
    tags: ['iq', 'aptitude', 'exam', 'practice', 'quiz', 'education'],
    icon: 'Brain',
    localizedDesc: {
      es: 'Práctica de aptitud y tests de CI para exámenes competitivos.',
      pt: 'Prática de raciocínio lógico e testes de aptidão para concursos.',
      de: 'Übungen für Eignungstests und logisches Denken bei Prüfungen.',
      fr: 'Entraînement aux tests d\'aptitude et de QI pour examens compétitifs.',
      ja: '公務員・適性試験対策向け多言語対応IQ＆ロジック問題集。',
      zh: '多语言竞技逻辑思维、行政能力测试与智商题型实战演练。'
    }
  },
  {
    id: 'kendaraya',
    name: 'Kendaraya',
    url: 'https://kendaraya.github.io/',
    desc: 'Traditional chart and horoscopic utility.',
    category: 'dev_finance_and_utility',
    tags: ['astrology', 'horoscope', 'chart', 'vedic', 'birth-chart'],
    icon: 'Compass',
    localizedDesc: {
      es: 'Carta astral y utilidad de cálculo horoscópico tradicional.',
      pt: 'Mapa astral e utilitário de cálculos horoscópicos tradicionais.',
      de: 'Traditionelle Astrologie-Karten und Horoskop-Berechnung.',
      fr: 'Calculateur de thème astral et d\'horoscope traditionnel.',
      ja: '伝統的な天体配置図およびホロスコープ出生図の算出ツール。',
      zh: '传统星盘排盘、出生星相与天体运行位置测算工具。'
    }
  },
  {
    id: 'freetools-online',
    name: 'FreeToolsOnline',
    url: 'https://freetools-online.github.io/',
    desc: 'Companion web utilities portal.',
    category: 'dev_finance_and_utility',
    tags: ['directory', 'tools', 'portal', 'utilities', 'hub'],
    icon: 'Boxes',
    badge: 'Network',
    localizedDesc: {
      es: 'Portal complementario de herramientas y utilidades web gratuitas.',
      pt: 'Portal complementar de utilitários e ferramentas web.',
      de: 'Begleitendes Web-Portal für nützliche Werkzeuge.',
      fr: 'Portail complémentaire d\'outils et utilitaires web.',
      ja: '相互連携する姉妹Webツール総合ポータル。',
      zh: '互联互通的姐妹站综合 Web 在线实用工具中心。'
    }
  },
  {
    id: 'responsive-viewer',
    name: 'ResponsiveViewer',
    url: 'https://responsive-viewer.github.io/',
    desc: 'Automated multi-device web responsiveness tester for localhost and live sites.',
    category: 'dev_finance_and_utility',
    tags: ['responsive', 'viewport', 'mobile', 'preview', 'developer', 'tester', 'screen', 'localhost', 'devices'],
    icon: 'Smartphone',
    badge: 'New',
    localizedDesc: {
      es: 'Probador automatizado de diseño adaptable multidispositivo para localhost y sitios web en vivo.',
      pt: 'Testador automatizado de responsividade web multidispositivo para localhost e sites online.',
      de: 'Automatisierter Multi-Device-Web-Responsiveness-Tester für Localhost und Live-Websites.',
      fr: 'Testeur automatisé de réactivité web multi-écrans pour localhost et sites en direct.',
      ja: 'ローカルホストおよび公開サイトを複数デバイスで自動プレビュー検証できるレスポンシブテスター。',
      zh: '支持本地 Localhost 与线上网站的多设备屏幕自适应自动化响应式测试工具。'
    }
  }
];

export const CATEGORIES = [
  { id: 'all', icon: '✨', key: 'all' },
  { id: 'pinned', icon: '⭐', key: 'pinned' },
  { id: 'video_and_audio', icon: '🎬', key: 'video_and_audio' },
  { id: 'pdf_and_documents', icon: '📄', key: 'pdf_and_documents' },
  { id: 'image_and_design', icon: '🖼️', key: 'image_and_design' },
  { id: 'productivity_and_wellness', icon: '🚀', key: 'productivity_and_wellness' },
  { id: 'dev_finance_and_utility', icon: '💻', key: 'dev_finance_and_utility' }
] as const;
