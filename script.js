const designers = [
  {
    id: 1, name: "Minh Anh Studio", initials: "MA", location: "Hà Nội",
    bio: "Poster sự kiện giàu năng lượng, typography nổi bật và màu sắc táo bạo.",
    categories: ["Poster sự kiện", "Social media"], price: 250000, featured: 1,
    palette: ["#f07853", "#272922"], background: "#f8d6c8", status: "Đang nhận dự án",
    samples: [
      { title: "MAKE SOME NOISE", type: "POSTER SỰ KIỆN", bg: "#ef7954", fg: "#292a24" , image: "poster-1.jpg" },
      { title: "STAY CURIOUS", type: "SOCIAL CAMPAIGN", bg: "#d7c7f2", fg: "#353044" },
      { title: "CLUB NIGHT", type: "MUSIC EVENT", bg: "#292a24", fg: "#f1c7b4" }
    ],
    services: [
      { name: "Poster sự kiện", price: 250000, detail: "1 thiết kế chính · 2 lần chỉnh sửa" },
      { name: "Bộ social media", price: 450000, detail: "3 ấn phẩm đồng bộ · 2 lần chỉnh sửa" },
      { name: "Gói truyền thông sự kiện", price: 800000, detail: "Poster + 3 ấn phẩm mạng xã hội" }
    ],
    tos: ["Thời gian hoàn thành dự kiến từ 5–7 ngày sau khi chốt brief.", "Giá bao gồm số lần chỉnh sửa được ghi trong từng gói; thay đổi lớn có thể phát sinh phí.", "Câu lạc bộ cần cung cấp nội dung, logo và thông tin sự kiện chính xác.", "Quyền sử dụng sản phẩm và việc đăng panorama cần được hai bên thống nhất."]
  },
  {
    id: 2, name: "Linh Nguyễn Design", initials: "LN", location: "TP. Hồ Chí Minh",
    bio: "Phong cách tối giản, tinh tế; phù hợp với CLB học thuật và hoạt động cộng đồng.",
    categories: ["Nhận diện CLB", "Social media"], price: 350000, featured: 2,
    palette: ["#c9d8b9", "#29382b"], background: "#dce7d3", status: "Đang nhận dự án",
    samples: [
      { title: "GROW TOGETHER", type: "CLUB BRANDING", bg: "#cbdcbf", fg: "#29402c" },
      { title: "OPEN MINDS", type: "ACADEMIC EVENT", bg: "#f1e7d4", fg: "#344d69" },
      { title: "GOOD THINGS", type: "SOCIAL MEDIA", bg: "#d8c9f2", fg: "#403650" }
    ],
    services: [
      { name: "Bộ nhận diện CLB cơ bản", price: 650000, detail: "Logo chữ + bảng màu + hướng dẫn ngắn" },
      { name: "Bộ social media", price: 350000, detail: "3 mẫu bài đăng theo cùng phong cách" },
      { name: "Poster học thuật", price: 300000, detail: "1 poster chính · 2 lần chỉnh sửa" }
    ],
    tos: ["Cần thống nhất brief và phong cách trước khi bắt đầu.", "Thời gian hoàn thành dự kiến từ 7–10 ngày tùy độ phức tạp.", "File bàn giao và định dạng xuất sẽ được xác nhận trước dự án.", "Không sử dụng tài nguyên có bản quyền nếu chưa có quyền sử dụng phù hợp."]
  },
  {
    id: 3, name: "Tú Hoàng Creative", initials: "TH", location: "Đà Nẵng",
    bio: "Minh họa vui tươi, nhân vật dễ thương và hình ảnh cho sự kiện sinh viên.",
    categories: ["Minh họa", "Poster sự kiện"], price: 200000, featured: 3,
    palette: ["#f2cf58", "#4a395b"], background: "#f6e9ad", status: "Có thể nhận lịch",
    samples: [
      { title: "HAPPY CAMPUS", type: "CAMPUS FEST", bg: "#f3d35d", fg: "#49395a" },
      { title: "LITTLE WORLD", type: "CHARACTER ART", bg: "#c6d9f1", fg: "#304c71" },
      { title: "SUMMER CLUB", type: "EVENT GRAPHIC", bg: "#f1a98f", fg: "#613e53" }
    ],
    services: [
      { name: "Minh họa đơn giản", price: 200000, detail: "1 minh họa cơ bản · nền đơn giản" },
      { name: "Poster minh họa", price: 400000, detail: "Poster có minh họa riêng · 2 lần chỉnh sửa" },
      { name: "Sticker cho CLB", price: 500000, detail: "Bộ 5 sticker theo chủ đề" }
    ],
    tos: ["Khách hàng mô tả rõ nhân vật, màu sắc và mục đích sử dụng.", "Thời gian hoàn thành dự kiến từ 5–8 ngày.", "Không bao gồm thiết kế lại toàn bộ sau khi đã duyệt phác thảo.", "Hai bên thống nhất quyền sử dụng thương mại trước khi bàn giao."]
  },
  {
    id: 4, name: "An Phạm Visuals", initials: "AP", location: "Hà Nội",
    bio: "Thiết kế truyền thông hiện đại, bố cục rõ ràng và bộ hình ảnh đồng nhất.",
    categories: ["Social media", "Nhận diện CLB"], price: 300000, featured: 4,
    palette: ["#cbbcf1", "#30314b"], background: "#e6ddfa", status: "Đang nhận dự án",
    samples: [
      { title: "BE THE CHANGE", type: "SOCIAL CAMPAIGN", bg: "#c9baf1", fg: "#2e304a" },
      { title: "FUTURE FORUM", type: "STUDENT CONFERENCE", bg: "#d7e2d1", fg: "#2e4838" },
      { title: "OUR COMMUNITY", type: "CLUB IDENTITY", bg: "#f4b49a", fg: "#583c42" }
    ],
    services: [
      { name: "Bộ bài đăng mạng xã hội", price: 300000, detail: "3 mẫu bài đăng theo cùng bộ nhận diện" },
      { name: "Bộ nhận diện sự kiện", price: 750000, detail: "Key visual + poster + 2 định dạng mạng xã hội" },
      { name: "Template Canva", price: 400000, detail: "2 template có thể chỉnh sửa cho CLB" }
    ],
    tos: ["Khách hàng gửi nội dung cuối cùng trước khi thiết kế.", "Thời gian hoàn thành dự kiến từ 5–7 ngày.", "File Canva chỉnh sửa được chỉ bao gồm khi gói dịch vụ ghi rõ.", "Phí phát sinh và quyền sử dụng được thống nhất bằng văn bản trước khi làm."]
  }
];

const grid = document.getElementById("designerGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const designerModal = document.getElementById("designerModal");
const requestModal = document.getElementById("requestModal");
const infoModal = document.getElementById("infoModal");
let activeCategory = "Tất cả";
let selectedDesigner = null;

const formatPrice = amount => new Intl.NumberFormat("vi-VN").format(amount) + "đ";

function renderCard(designer) {
  const sample = designer.samples[0];
  const tags = designer.categories.map(cat => `<span class="tag">${cat}</span>`).join("");
  return `
    <article class="designer-card" tabindex="0" role="button" aria-label="Xem hồ sơ ${designer.name}" data-id="${designer.id}">
  <div class="card-art" style="background:${designer.background}">
    ${
      sample.image
        ? `<img class="sample-image" src="${sample.image}" alt="${sample.title}" loading="lazy">`
        : `<div class="mini-poster" style="background:${sample.bg};color:${sample.fg}">
            <span>${sample.type}</span>
            <strong>${sample.title.replaceAll(" ", "<br>")}</strong>
            <span>PANORAMA / CREATIVE WORK</span>
          </div>`
    }
    <span class="art-label">${designer.categories[0]}</span>
  </div>
  <div class="card-body">
    <div class="card-topline"><h3>${designer.name}</h3><span class="availability">${designer.status}</span></div>
    <p class="card-bio">${designer.bio}</p>
    <div class="tag-list">${tags}</div>
    <div class="card-bottom">
      <div><span class="price-label">Giá từ</span><span class="card-price">${formatPrice(designer.price)}</span></div>
      <button class="card-open" aria-label="Xem chi tiết ${designer.name}" data-open-id="${designer.id}">↗</button>
    </div>
  </div>
</article>`;
}

function renderDesigners() {
  const query = searchInput.value.trim().toLocaleLowerCase("vi");
  let filtered = designers.filter(d => {
    const matchesCategory = activeCategory === "Tất cả" || d.categories.includes(activeCategory);
    const searchable = [d.name, d.bio, d.location, ...d.categories].join(" ").toLocaleLowerCase("vi");
    return matchesCategory && searchable.includes(query);
  });
  if (sortSelect.value === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "featured") filtered.sort((a, b) => a.featured - b.featured);
  grid.innerHTML = filtered.map(renderCard).join("");
  resultCount.textContent = `${filtered.length} designer`;
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  grid.classList.toggle("hidden", filtered.length === 0);
}

function openDesigner(id) {
  selectedDesigner = designers.find(d => d.id === Number(id));
  if (!selectedDesigner) return;
  const d = selectedDesigner;
  const samples = d.samples.map(s => `
    <div class="sample-tile" style="background:${s.bg};color:${s.fg}">
      <span>${s.type}</span><strong>${s.title.replaceAll(" ", "<br>")}</strong><span>PANORAMA · SAMPLE</span>
    </div>`).join("");
  const services = d.services.map(s => `
    <div class="service-row"><div><strong>${s.name}</strong><small>${s.detail}</small></div><span class="service-price">${formatPrice(s.price)}</span></div>`).join("");
  const tos = d.tos.map(t => `<li>${t}</li>`).join("");
  document.getElementById("modalContent").innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar" style="background:${d.background};color:${d.palette[1]}">${d.initials}</div>
      <div><h2>${d.name}</h2><p class="profile-subtitle">Designer độc lập · ${d.location} · ${d.status}</p></div>
    </div>
    <p class="profile-bio">${d.bio} Mình mong muốn giúp các câu lạc bộ biến ý tưởng thành những ấn phẩm trực quan, dễ nhận diện và phù hợp với cộng đồng.</p>
    <div class="tag-list">${d.categories.map(c => `<span class="tag">${c}</span>`).join("")}</div>
    <section class="modal-section"><h3>Một vài sản phẩm mẫu</h3><div class="sample-grid">${samples}</div></section>
    <section class="modal-section"><h3>Dịch vụ & bảng giá tham khảo</h3><div class="service-list">${services}</div><p class="profile-subtitle">Giá trong bản demo chỉ để minh họa. Chi phí thực tế cần được designer xác nhận theo brief.</p></section>
    <section class="modal-section"><h3>Điều khoản dịch vụ (ToS)</h3><ul class="tos-list">${tos}</ul></section>
    <div class="profile-actions"><button class="button button-dark" id="contactDesigner">Gửi yêu cầu thiết kế ↗</button><button class="button button-light" id="copyProfile">Sao chép thông tin</button></div>`;
  designerModal.showModal();
  document.getElementById("contactDesigner").addEventListener("click", () => openRequest(d));
  document.getElementById("copyProfile").addEventListener("click", async () => {
    const text = `${d.name}\n${d.bio}\nDịch vụ: ${d.categories.join(", ")}\nGiá tham khảo từ ${formatPrice(d.price)}`;
    try {
      await navigator.clipboard.writeText(text);
      document.getElementById("copyProfile").textContent = "Đã sao chép ✓";
    } catch {
      document.getElementById("copyProfile").textContent = "Không thể sao chép tự động";
    }
  });
}

function openRequest(designer = null) {
  selectedDesigner = designer;
  document.getElementById("requestTitle").textContent = designer ? `Gửi yêu cầu cho ${designer.name}` : "Tham gia cùng PANORAMA";
  document.getElementById("formNotice").textContent = "";
  designerModal.close();
  requestModal.showModal();
}

function showInfo(title, text) {
  document.getElementById("infoTitle").textContent = title;
  document.getElementById("infoText").textContent = text;
  infoModal.showModal();
}

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-id]");
  const openButton = event.target.closest("[data-open-id]");
  if (openButton) return openDesigner(openButton.dataset.openId);
  if (card) openDesigner(card.dataset.id);
});
grid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".designer-card")) {
    event.preventDefault();
    openDesigner(event.target.dataset.id);
  }
});
searchInput.addEventListener("input", renderDesigners);
sortSelect.addEventListener("change", renderDesigners);
document.querySelectorAll(".category-chip").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".category-chip").forEach(b => b.classList.toggle("active", b === button));
    renderDesigners();
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  });
});
document.getElementById("resetFilters").addEventListener("click", () => {
  activeCategory = "Tất cả";
  searchInput.value = "";
  sortSelect.value = "featured";
  document.querySelectorAll(".category-chip").forEach(b => b.classList.toggle("active", b.dataset.category === activeCategory));
  renderDesigners();
});
document.getElementById("closeModal").addEventListener("click", () => designerModal.close());
document.getElementById("closeRequestModal").addEventListener("click", () => requestModal.close());
document.getElementById("closeInfoModal").addEventListener("click", () => infoModal.close());
document.getElementById("infoDone").addEventListener("click", () => infoModal.close());

document.getElementById("requestForm").addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const club = formData.get("club");
  const email = formData.get("email");
  const service = formData.get("service");
  const details = formData.get("details");
  const designerLine = selectedDesigner ? `Designer bạn chọn: ${selectedDesigner.name}. ` : "";
  document.getElementById("formNotice").textContent =
    `Đã tạo bản xem trước yêu cầu cho ${club}. ${designerLine}Dịch vụ: ${service}. Email liên hệ: ${email}. Đây chỉ là bản demo; thông tin chưa được gửi hoặc lưu trên máy chủ.`;
});

document.getElementById("joinBtn").addEventListener("click", () => showInfo(
  "Chào mừng đến PANORAMA",
  "Bản demo chưa có hệ thống đăng ký tài khoản. Ở phiên bản tiếp theo, bạn có thể thêm hồ sơ designer, đăng nhập và quản lý yêu cầu."
));
document.getElementById("designerJoinBtn").addEventListener("click", () => openRequest(null));
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.querySelector(".desktop-nav");
  const opened = nav.classList.toggle("mobile-open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(opened));
});
document.querySelectorAll(".desktop-nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".desktop-nav").classList.remove("mobile-open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}));

renderDesigners();
