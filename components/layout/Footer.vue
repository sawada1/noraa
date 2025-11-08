<template>
  <footer class="footer bg-light text-dark pt-5 pb-4 mt-5">
    <div class="container  text-center">
        
      <div class="row">

        <!-- Column 1 -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold text-success mb-3">المساعدة الذاتية</h5>
          <ul class="list-unstyled footer-links">
            <li><NuxtLink to="/live-courses">الدورات الحية</NuxtLink></li>
            <li><NuxtLink to="/book-store">كتب</NuxtLink></li>
            <li><NuxtLink to="/blogs">المدونات</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 2 -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold text-success mb-3">روابط سريعة</h5>
          <ul class="list-unstyled footer-links">
            <li><NuxtLink to="/consultation">استشارة حول كتاب</NuxtLink></li>
            <li><NuxtLink to="/subscription">المحادثات</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold text-success mb-3">روابط أخرى</h5>
          <ul class="list-unstyled footer-links">
            <li><NuxtLink to="/about">عن</NuxtLink></li>
            <li><NuxtLink to="/bundled-courses"> باقة دورات </NuxtLink></li>
          </ul>
        </div>

      </div>

      <hr class="my-4" />

      <div class="text-center text-muted small">
        جميع الحقوق محفوظة © {{ new Date().getFullYear() }} 
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  direction: rtl;
  background-color: #f8f9fa;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #198754; /* Bootstrap success color */
}

@media (max-width: 767px) {
  .footer {
    text-align: center;
  }
}
</style>
