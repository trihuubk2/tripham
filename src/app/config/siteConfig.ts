// ========================================
// CẤU HÌNH TRANG WEB - DỄ DÀNG CHỈNH SỬA
// ========================================

export const siteConfig = {
  // THÔNG TIN CƠ BẢN
  title: "Tri.P Media",
  subtitle: `Recap/Wedding Video\nLive Streaming - VFX`,
  
  
  footer: "© 2026 Trí Phạm",

  // MÀU SẮC CHỦ ĐẠO
  // Đổi màu tại đây, ví dụ: "#b45f06" (nâu), "#dc2626" (đỏ), "#2563eb" (xanh dương)
  primaryColor: "#b45f06",
  
  // LOGO
  logoUrl: "", // Thêm đường dẫn logo của bạn tại đây, ví dụ: "/logo.png"
  logoAlt: "Logo", // Mô tả cho logo

  // HEADER (Phần trên cùng)
  header: {
    // Căn chỉnh khoảng cách lên xuống (padding)
    paddingTop: 100,    // Khoảng cách phía trên (px) - Desktop
    paddingBottom: 48, // Khoảng cách phía dưới (px) - Desktop
    paddingTopMobile: 39,    // Khoảng cách phía trên (px) - Mobile
    paddingBottomMobile: 48, // Khoảng cách phía dưới (px) - Mobile
    
    // Background Type: "solid" (màu), "image" (hình), "video" (video)
    backgroundType: "solid",
    
    // Nếu dùng màu solid (backgroundType: "solid")
    // Sẽ tự động dùng primaryColor
    
    // Nếu dùng hình (backgroundType: "image")
    backgroundImage: "/header-bg.jpg", // Đường dẫn hình
    
    // Nếu dùng video (backgroundType: "video")
    backgroundVideo: "/header-video.mp4", // Đường dẫn video
    
    // Lớp phủ tối (overlay) - giúp chữ dễ đọc hơn
    // 0 = không có, 1 = tối hoàn toàn
    overlayOpacity: 0.3, // 0.3 = 30% tối
  },

  // FONT CHỮ
  // Thay đổi font chữ cho toàn bộ trang web
  fontFamily: "", // Ví dụ: "Roboto", "Open Sans", "Montserrat", để trống = font mặc định

  // VIDEO CARD - OVERLAY THÔNG TIN
  videoCard: {
    // Hiển thị thông tin (tên + mô tả) trên video
    showInfoOverlay: true, // true = hiển thị, false = ẩn
    
    // Độ trong của nền overlay (0 = trong suốt hoàn toàn, 1 = đục hoàn toàn)
    overlayOpacity: 0.6, // 0.6 = 60% độ đục
    
    // Vị trí overlay: "bottom" (phía dưới), "top" (phía trên)
    overlayPosition: "bottom",
    
    // Kích thước chữ tiêu đề
    titleSize: "base", // sm, base, lg
    
    // Kích thước chữ mô tả
    descriptionSize: "sm", // xs, sm, base
    
    // Khoảng cách padding bên trong overlay
    padding: "4", // 2, 3, 4, 5, 6 (số càng lớn = padding càng nhiều)
  },

  // TRANG CHỦ - NỘI DUNG
  home: {
    heroTitle: "Xin Chào, Tôi Là Trí Phạm",
    heroTitleSize: "text-2x2",
    heroSubtitle: "Video Editor - Kỹ Thuật Livestream chuyên nghiệp với hơn 5 năm kinh nghiệm",

    
    
    aboutTitle: "Về Tôi",
    aboutContent: `Tôi là một Video Editor đam mê với nghệ thuật kể chuyện qua hình ảnh.

Với kinh nghiệm làm việc trong nhiều dự án từ sự kiện, wedding đến quảng cáo, 
tôi luôn mang đến những sản phẩm chất lượng cao, phù hợp với nhu cầu khách hàng.

Mục tiêu của tôi là biến những khoảnh khắc của bạn thành những câu chuyện đáng nhớ.`,

    // Kỹ năng & Dịch vụ
    skills: [
      {
        icon: "video", // video, camera, code, award
        title: "Video Editing",
        description: "Chuyên dựng video sự kiện, wedding, recap với hiệu ứng chuyên nghiệp",
      },
      {
        icon: "camera",
        title: "Color Grading",
        description: "Chỉnh màu chuyên nghiệp, tạo tone màu độc đáo cho từng dự án",
      },
      {
        icon: "award",
        title: "Live Streaming",
        description: "Hỗ trợ live stream sự kiện, hội thảo với chất lượng cao",
      },
      {
        icon: "code",
        title: "Motion Graphics",
        description: "Tạo hiệu ứng chuyển động, text animation, lower thirds",
      },
    
    ],

    // Kinh nghiệm làm việc
    experience: [
      {
        title: "Video Editor",
        company: "Freelancer",
        period: "2019 - Hiện tại",
        description: "Thực hiện dựng video cho các dự án wedding, sự kiện, quảng cáo. Hợp tác với nhiều đơn vị tổ chức sự kiện và studio ảnh cưới.",
      },
      {
        title: "Live Streaming",
        company: "Freelance",
        period: "2019 - Hiện tại",
        description: "Livestream sự kiện, các hội thảo, cầu truyền hình, tương tác giữa các cầu truyền hình, live led",
      },
    ],

    // Thông tin liên hệ
    contact: {
      email: "trihuu118@gmail.com",
      phone: "+84 945 01 01 18",
      location: "Thành phố Hồ Chí Minh, Việt Nam",
    },
  },

  // DANH SÁCH VIDEO - PORTFOLIO
  videos: [
    {
      id: "IUvoeJhQa3g",
      title: "Recap | Tân Niên CB Group",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Sự Kiện",
      thumbnail: "", // Để trống = dùng thumbnail từ YouTube, hoặc thêm đường dẫn hình: "/thumbnails/video1.jpg"
    },
    {
      id: "NweplTCcjmU",
      title: "Ngày hội thả diều BV Mắt Sài Gòn CT",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Sự Kiện",
      thumbnail: "",
    },
    {
      id: "hx3hBbNpZEM",
      title: "YEP - BV Mắt Sài Gòn CT - 2024",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Sự Kiện",
      thumbnail: "",
    },
    {
      id: "ASoWeoyL9FY",
      title: "YEP - Syngenta - VFC 2025",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Sự Kiện",
      thumbnail: "",
    },
    {  id: "aRKrUKj0OTw",
      title: "Recap Bình Minh Việt",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Sự Kiện",
      thumbnail: "",
    },
    {  id: "x5ktx3J1sPY",
      title: "Recap YEP OHUI - Sheraton CT",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Sự Kiện",
      thumbnail: "",
    },
    {  id: "gyzv34l1jvo",
      title: "Recap Tứ Thiên Kim - DJI",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Sự Kiện",
      thumbnail: "",
    },
    {  id: "ft1yMrQBkbo",
      title: "Recap DQ Group - Vạn Phát Cần Thơ",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Sự Kiện",
      thumbnail: "",
    },

    
    
    //WEDDING
    { id: "FrVVtKW4wjo",
      title: "Long + Giang | Cần Thơ",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Wedding",
      thumbnail: "",
    },
    {
      id: "JMSbXnaRBNM",
      title: "Wedding | Phước Thành và Dạ Phương",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Wedding",
      thumbnail: "",
    },
    {
      id: "Wg6WI9cD_qY",
      title: "Vu Quy | Phương Linh và Thanh Huy",
      description: "Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Wedding",
      thumbnail: "",
    },
    {
      id: "-J_J7uKen50",
      title: "Wedding Thịnh và Châu",
      description: "Kan Wedding - Ekip Thạnh Nguyễn (CamOp) - Tri.P (Editor)",
      category: "Wedding",
      thumbnail: "https://sf-static.upanhlaylink.com/img/image_20260328986503bb4625a901e0fc73db775e159c.jpg",
    },
  ],

  // MÔ TÁ VỀ BẢN THÂN / GIỚI THIỆU (Cũ - không dùng nữa, thay bằng home.aboutContent)
  about: {
    enabled: false,
    title: "Về Chúng Tôi",
    content: "",
  },

  // VIDEO BACKDROP (Nền video toàn trang)
  backgroundVideo: {
    enabled: false, // true = hiển thị video nền, false = tắt
    url: "/background.mp4", // Đường dẫn đến file video
  },
};

// ========================================
// HƯỚNG DẪN SỬ DỤNG CHI TIẾT:
// ========================================
// 
// 1. CHỈNH SỬA NỘI DUNG TRANG CHỦ:
//    - Mở phần "home" ở trên
//    - Thay đổi heroTitle, heroSubtitle (tiêu đề chính)
//    - Thay đổi aboutContent (giới thiệu bản thân)
//    - Cập nhật skills (kỹ năng)
//    - Cập nhật experience (kinh nghiệm)
//    - Cập nhật contact (email, phone, location)
//
// 2. THÊM/SỬA VIDEO:
//    - Mở phần "videos" ở trên
//    - Thêm video mới theo cấu trúc:
//      {
//        id: "VIDEO_ID_YOUTUBE",        // Lấy từ URL YouTube
//        title: "Tiêu đề video",
//        description: "Mô tả ngắn",
//        category: "Sự Kiện",           // Sự Kiện, Wedding, v.v.
//        thumbnail: "/thumb1.jpg",      // Để trống hoặc thêm đường dẫn
//      }
//
// 3. CUSTOM THUMBNAIL CHO VIDEO:
//    - Cách 1: Để trống thumbnail: "" (dùng thumbnail mặc định từ YouTube)
//    - Cách 2: Đặt file ảnh vào /public/thumbnails/video1.jpg
//             Rồi đổi: thumbnail: "/thumbnails/video1.jpg"
//    - Cách 3: Dùng URL: thumbnail: "https://example.com/thumb.jpg"
//
// 4. ĐỔI MÀU:
//    - Thay đổi primaryColor thành mã màu bạn muốn
//
// 5. THÊM LOGO:
//    - Đặt file logo vào /public/logo.png
//    - Đổi logoUrl: "/logo.png"
//
// 6. ĐỔI HEADER BACKGROUND:
//    - Màu solid: backgroundType: "solid"
//    - Hình ảnh: backgroundType: "image", backgroundImage: "/header-bg.jpg"
//    - Video: backgroundType: "video", backgroundVideo: "/header-video.mp4"
//
// 7. ĐỔI FONT CHỮ:
//    - Mở /src/styles/fonts.css
//    - Thêm: @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
//    - Đổi fontFamily: "Roboto"
//
// 8. TÙY CHỈNH KHUNG THÔNG TIN VIDEO (videoCard):
//    - showInfoOverlay: true/false - Bật/tắt hiển thị khung thông tin
//    - overlayOpacity: 0.6 - Độ đục (0 = trong suốt, 1 = đục hoàn toàn)
//    - overlayPosition: "bottom" hoặc "top" - Vị trí khung (dưới/trên)
//    - titleSize: "sm", "base", "lg" - Kích thước chữ tiêu đề
//    - descriptionSize: "xs", "sm", "base" - Kích thước chữ mô tả
//    - padding: "2", "3", "4", "5", "6" - Khoảng cách padding
//
// ========================================
