// DATA
const data = {

  // HOME
  aboutMe_part1: `I am a PhD researcher studying complex systems through agent-based modeling and simulation. However, teaching, is my Ikigai, it is driven by a deep commitment to helping students grow beyond what they thought possible.`,
  aboutMe_part2: `It is not an accessory to my work — it is its foundation and its energy. Research sharpens my thinking; the classroom gives it meaning. And as a developer, I turn ideas into clean, reliable software built to last.`,

  overview: [
    { number: new Date().getFullYear() - 2017, label: 'Years experience' },
    { number: '800+', label: 'Students taught' },
    { number: '20+', label: 'Topics' }
  ],

  experiences: [
    { year: '2026 – Present', role: 'Consultant', org: 'Independent', desc: 'Advising, teaching, on a much more singular level for all societies, and developing scalable solutions' },
    { year: '2021 – 2026', role: 'Study Coordinator | Back-end developer', org: "HEI Madagascar (Haute École d'Informatique), Antananarivo", desc: 'Responsible of studies, permanent teacher for 5 different topics, as well as some back-end development on the school management app' },
    { year: '2024', role: 'PhD in Computer Science', org: 'Université de Fianarantsoa', desc: 'A self-founded PhD on modeling complex systems, between the university of Fianarantsoa, and CIRAD, Montpellier, titled: Accounting for norms in agent-based modeling' },
    { year: '2017 – 2020', role: 'Teacher', org: "ESMIA (École Supérieure de Management et d'Informatique appliquée), Antananarivo", desc: 'Taught over 14 different topics from first years to Master degree. Mentoring students from small projects to technical ones' }
  ],

  homeCourses: [
    { tag: 'Development', title: 'Web Development Fundamentals', mode: 'Online', duration: '8 weeks' },
    { tag: 'Translation', title: 'Technical Translation Masterclass', mode: 'Hybrid', duration: '6 weeks' },
    { tag: 'Research', title: 'Academic Writing & Methodology', mode: 'Offline', duration: '10 weeks' },
  ],

  // COURSES
  courses: [
    { id: 1, title: 'Javascript for beginners', description: 'Javascript made easy as your first language. This video walks you through the basic mechanism of algorithms, loops, conditions, functions, JS modules, unit tests, and modern syntax perfect for starters', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 120000, level: 'beginner', language: 'en', technologies: ['javascript'] },
    { id: 2, title: 'Java for beginners', description: 'A simple course for true beginners in Java. Learn OOP fundamentals: classes, objects, encapsulation, inheritance, polymorphism, abstraction to understand the basics of Java.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 220000, level: 'beginner', language: 'en', technologies: ['java'] },
    { id: 3, title: 'Relational Databases for beginners', description: 'Understand how relational databases really work. This course introduces tables, primary keys, foreign keys, constraints, normalization, ER diagrams, and SQL basics.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 180000, level: 'beginner', language: 'fr', technologies: ['sql'] },
    { id: 4, title: 'Git & Version Control Essentials', description: 'Master Git from scratch. Learn repositories, commits, branches, merging, rebasing, resolving conflicts, and collaborating with remote repositories like GitHub.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 95000, level: 'beginner', language: 'en', technologies: [] },
    { id: 5, title: 'Operating Systems Fundamentals', description: 'Discover how operating systems manage processes, memory, files, threads, and scheduling. Understand the difference between user space and kernel space, concurrency basics.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 200000, level: 'beginner', language: 'fr', technologies: [] },
    { id: 6, title: 'Technical English for Developers', description: 'Improve your English for the tech world. Learn essential vocabulary for programming, documentation, meetings, presentations, and job interviews.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 85000, level: 'beginner', language: 'mg', technologies: [] },
    { id: 7, title: 'Professional French Communication', description: 'Strengthen your French for academic and professional environments. Focus on formal writing, presentations, technical explanations, and clear structured arguments.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 80000, level: 'beginner', language: 'mg', technologies: [] },
    { id: 8, title: 'SEO Fundamentals for Web Developers', description: 'Learn how search engines work and how to optimize websites for visibility. Cover keywords, technical SEO, performance optimization, metadata, and structured data.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 150000, level: 'intermediate', language: 'en', technologies: ['javascript'] },
    { id: 9, title: 'Spring Boot for Backend Development', description: 'Build modern REST APIs with Spring Boot. Learn dependency injection, controllers, services, JPA, security basics, validation, and scalable backend architecture.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 250000, level: 'advanced', language: 'fr', technologies: ['java'] },
  ],

  // TESTIMONIALS
  testimonials: [
    { id: 1, role: 'student', rating: 5, description: 'A precious aid, a light shining upon every step of my journey', author: 'Soa Mariaka, Promotion Mpamakilay, HEI (2021-2024)', thumbnail: 'https://picsum.photos/200' },
    { id: 2, role: 'student', rating: 5, description: 'An inspiring mentor who transforms complex concepts into clear and structured knowledge. The discipline and rigor I learned here shaped the way I approach every technical challenge today.', author: 'Faniry Keziah, Promotion Mpamakilay, HEI (2022-2025)', thumbnail: 'https://picsum.photos/200' },
    { id: 3, role: 'student', rating: 5, description: 'More than courses, it was a mindset shift. Learning how to think structurally about databases and algorithms changed my confidence as a developer.', author: 'Ando Ramanantsoa, Promotion Avotra, HEI (2021-2024)', thumbnail: 'https://picsum.photos/200' },
    { id: 4, role: 'student', rating: 4, description: 'The emphasis on fundamentals — Git, SQL, system design — prepared me for real-world projects. Every assignment felt practical and meaningful.', author: 'Dinasoa Ratsimba, Promotion Avotra, HEI (2022-2025)', thumbnail: 'https://picsum.photos/200' },
    { id: 5, role: 'student', rating: 5, description: 'Demanding but fair. The standards were high, yet the support was constant. I learned discipline, autonomy, and how to truly understand what I build.', author: 'Judicael Randrianjato, Promotion Mpamakilay, HEI (2021-2024)', thumbnail: 'https://picsum.photos/200' },
    { id: 6, role: 'collaborator', rating: 5, description: 'From algorithm storytelling to backend architecture, every lesson connected theory with practice. It pushed me to go beyond just "making it work."', author: 'Mayah Andriatsitohaina, Promotion Avotra, HEI (2023-2026)', thumbnail: 'https://picsum.photos/200' },
    { id: 7, role: 'collaborator', rating: 4, description: 'The way operating systems and databases were taught made abstract concepts concrete. I now approach technical problems with clarity and structure.', author: 'Axel, Promotion Mpamakilay, HEI (2022-2025)', thumbnail: 'https://picsum.photos/200' },
    { id: 8, role: 'collaborator', rating: 5, description: 'Beyond coding, I gained professional communication skills and technical English confidence. That made a real difference during internships.', author: 'Tolojanahary Randrambelo, Promotion Avotra, HEI (2023-2026)', thumbnail: 'https://picsum.photos/200' },
    { id: 9, role: 'collaborator', rating: 5, description: 'The rigor in project reviews and exam preparation pushed me to exceed my limits. It was challenging, but it prepared me for industry expectations.', author: 'Fiantso Harena, Promotion Mpamakilay, HEI (2021-2024)', thumbnail: 'https://picsum.photos/200' },
    { id: 10, role: 'collaborator', rating: 4, description: 'A rare combination of technical depth and pedagogical clarity. Working alongside Tokimahery elevated the quality of everything we built together.', author: 'Ravo Rakotondrabe', thumbnail: 'https://picsum.photos/200' },
    { id: 11, role: 'customer', rating: 5, description: 'The translation work delivered was precise, fast, and culturally nuanced. Exactly what our project needed.', author: 'Hery Andriantsoa', thumbnail: 'https://picsum.photos/200' },
    { id: 12, role: 'customer', rating: 5, description: 'We hired Tokimahery to consult on our backend architecture. The recommendations were pragmatic and immediately actionable.', author: 'Lalaina Rasolofo', thumbnail: 'https://picsum.photos/200' },
    { id: 13, role: 'customer', rating: 4, description: 'Professional, responsive, and thorough. The deliverables exceeded our expectations in both quality and timeliness.', author: 'Miora Randriamihaja', thumbnail: 'https://picsum.photos/200' },
    { id: 14, role: 'customer', rating: 5, description: 'Tokimahery helped us untangle a legacy codebase that had been holding us back for years. Clear roadmap, clean execution.', author: 'Njaka Rakotomalala', thumbnail: 'https://picsum.photos/200' },
    { id: 15, role: 'customer', rating: 5, description: 'From scoping to delivery, the whole process was smooth and transparent. I would not hesitate to work together again.', author: 'Sitraka Andriamanantena', thumbnail: 'https://picsum.photos/200' },
  ],

  // BLOG
  posts: [
    { id: 1, title: 'Join me at HEI', description: "Since 2021, I have been a part of HEI - Haute École d'Informatique, from the ground up, and until its evolution, struggles, and first students, I have been there, and it was a lot of fun.", creationDate: new Date('2026-03-08'), thumbnail: 'https://picsum.photos/400', tags: ['education', 'HEI'] },
    { id: 2, title: 'Teaching Databases the Right Way', description: "Too many students jump directly into ORMs without understanding relational thinking. In my courses, we start with normalization, constraints, and real SQL joins before touching any abstraction layer. Strong foundations create confident engineers.", creationDate: new Date('2026-01-12'), thumbnail: 'https://picsum.photos/400', tags: ['databases', 'SQL', 'education'] },
    { id: 3, title: 'Why Git Is a Survival Skill', description: "Version control is not optional. I teach Git before advanced frameworks because collaboration, clean commit history, and conflict resolution are what make or break real-world software projects.", creationDate: new Date('2026-02-03'), thumbnail: 'https://picsum.photos/400', tags: ['git', 'software-engineering', 'education'] },
    { id: 4, title: 'Building a Secure Exam Platform', description: "Designing a live exam platform with strict tab-focus control and paste restrictions pushed me to combine pedagogy and engineering. Fair assessment requires both technical precision and educational clarity.", creationDate: new Date('2026-03-19'), thumbnail: 'https://picsum.photos/400', tags: ['svelte', 'typescript', 'assessment'] },
    { id: 5, title: 'Operating Systems: From Theory to Practice', description: "Processes, threads, memory management — these concepts only make sense when students experiment with them. I prioritize simulations and real concurrency problems to make operating systems tangible.", creationDate: new Date('2026-04-08'), thumbnail: 'https://picsum.photos/400', tags: ['operating-systems', 'computer-science', 'education'] },
    { id: 6, title: 'Spring Boot Beyond CRUD', description: "Teaching Spring Boot is not about generating controllers. It is about architecture: layered design, validation, security, JPA relationships, and writing backend systems that remain maintainable years later.", creationDate: new Date('2026-05-27'), thumbnail: 'https://picsum.photos/400', tags: ['spring-boot', 'java', 'backend'] },
    { id: 7, title: 'Technical English Is a Career Lever', description: "Reading documentation, writing clear README files, and communicating ideas internationally are critical skills for developers. Integrating technical English into IT training unlocks global opportunities.", creationDate: new Date('2026-07-14'), thumbnail: 'https://picsum.photos/400', tags: ['english', 'career', 'education'] },
    { id: 8, title: 'SEO for Engineers', description: "SEO is not just marketing. It is structured HTML, accessibility, performance optimization, and semantic clarity. Developers who understand search engines build better web applications.", creationDate: new Date('2026-09-02'), thumbnail: 'https://picsum.photos/400', tags: ['seo', 'web-development', 'performance'] },
    { id: 9, title: 'Narrative-Driven Programming Exercises', description: "I design algorithm problems with storytelling elements while keeping strict technical constraints. Students engage more deeply, and still practice loops, accumulators, edge cases, and structured thinking.", creationDate: new Date('2026-11-18'), thumbnail: 'https://picsum.photos/400', tags: ['algorithms', 'pedagogy', 'education'] },
  ],

  youtubeVideos: [
    { id: 'cdWNlGD_FzQ', title: 'Counter App with Pharo' },
    { id: 'cfS4XP4bBEk', title: 'Build a DSL with Pharo' },
    { id: 'Ut2aeuFc2KY', title: 'My keyboard addiction' }
  ],

  archives: [
    { label: 'January 2026', slug: '2026-01', count: 2 },
    { label: 'February 2026', slug: '2026-02', count: 1 },
  ],

  // RESEARCH
  papers: [
    { id: 1, title: 'Automatic Generation of Thematic Maps Using Multi-Agent Systems', abstract: 'This paper presents an approach to automating the generation of thematic maps through multi-agent systems. Agents collaborate to process, interpret, and spatially organize geographic data, reducing the manual effort typically required in cartographic workflows. The system is demonstrated and evaluated within the GAMA simulation platform.', publishedDate: new Date('2024-11-01'), journal: 'GAMA Days 2024', authors: ['I. H. Maminiaina', 'H. Rakotonirainy', 'J. Dinaharison', 'T. Ramarozaka', 'A. Razafinimaro'], tags: ['multi-agent systems', 'cartography', 'GAMA'], url: 'https://hal.science/hal-04890215v1/file/Gama_days_2024_Maminiaina.pdf', pdfUrl: 'https://hal.science/hal-04890215v1/file/Gama_days_2024_Maminiaina.pdf' },
    { id: 2, title: 'Prise en compte des normes dans les comportements des agents', abstract: "Cette thèse de doctorat explore comment les normes sociales et organisationnelles peuvent être intégrées dans les comportements des agents autonomes. Elle propose un cadre formel permettant aux agents de percevoir, interpréter et respecter des normes dans des environnements multi-agents complexes, avec des applications en simulation sociale et en systèmes distribués.", publishedDate: new Date('2024-01-01'), journal: 'Université de Fianarantsoa — Thèse de doctorat en Informatique', authors: ['T. Ramarozaka'], tags: ['multi-agent systems', 'norms', 'PhD thesis'], url: 'https://agritrop.cirad.fr/610658/1/THESE%20Tokimahery%20FINALE.pdf', pdfUrl: 'https://agritrop.cirad.fr/610658/1/THESE%20Tokimahery%20FINALE.pdf' },
    { id: 3, title: 'Extending Partial-Order Planning to Account for Norms in Agent Behavior', abstract: 'This paper proposes an extension of partial-order planning to integrate normative constraints into agent behavior. By incorporating norms directly into the planning process, agents can reason about socially acceptable action sequences while still achieving their goals. The approach is evaluated in the context of multi-agent simulations and discussed within the European Social Simulation community.', publishedDate: new Date('2022-09-01'), journal: 'Conference of the European Social Simulation Association, Springer Nature Switzerland', authors: ['T. Ramarozaka', 'J. P. Müller', 'H. L. Rakotonirainy'], tags: ['multi-agent systems', 'norms', 'planning'], url: 'https://edepot.wur.nl/641647#page=144', pdfUrl: 'https://edepot.wur.nl/641647#page=144' },
  ],

};

(function () {
  if (typeof data === 'undefined') {
    console.error('data is not loaded. Make sure data is defined before this script.');
    return;
  }

  const postsPerPage = 5;
  let currentPage = 1;

  let cart = JSON.parse(localStorage.getItem('tr_cart') || '[]');

  function createStarIcon() {
    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-star');
    return i;
  }

  function renderCart() {
    localStorage.setItem('tr_cart', JSON.stringify(cart));
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartPanel = document.getElementById('cartPanel');
    const cartBadge = document.getElementById('cartBadge');
    if (!cartItemsContainer) return;

    if (cartBadge) {
      if (cart.length > 0) {
        cartBadge.textContent = cart.length;
        cartBadge.classList.remove('hidden');
      } else {
        cartBadge.classList.add('hidden');
      }
    }

    cartItemsContainer.replaceChildren();
    let total = 0;

    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item';

      const span = document.createElement('span');
      span.textContent = `${item.title} - MGA ${item.price.toLocaleString()}`;

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.textContent = 'X';
      removeBtn.addEventListener('click', () => {
        const removedId = cart[index].id;
        cart.splice(index, 1);
        const grid = document.getElementById('coursesGrid');
        if (grid) {
          const matchingCourse = (data.courses || []).find(c => c.id === removedId);
          if (matchingCourse) {
            grid.querySelectorAll('.course-cards').forEach(card => {
              const titleEl = card.querySelector('h3');
              const btn = card.querySelector('.cart');
              if (btn && titleEl && titleEl.textContent === matchingCourse.title) {
                btn.textContent = 'Add to cart';
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
              }
            });
          }
        }
        renderCart();
      });

      div.append(span, removeBtn);
      cartItemsContainer.appendChild(div);
      total += item.price;
    });

    if (cartTotal) cartTotal.textContent = `Total: MGA ${total.toLocaleString()}`;

    let existingBtn = document.getElementById('confirmOrderBtn');
    if (existingBtn) existingBtn.remove();

    if (cartPanel) {
      const confirmBtn = document.createElement('button');
      confirmBtn.id = 'confirmOrderBtn';
      confirmBtn.textContent = 'Confirm Order';
      confirmBtn.style.cssText = 'margin-top:15px;width:100%;padding:10px;background:#a30010;color:white;border:none;border-radius:5px;cursor:pointer;';
      confirmBtn.addEventListener('click', () => {
        if (cart.length === 0) {
          alert('Votre panier est vide !');
        } else {
          alert(`Commande confirmée ! Total : MGA ${total.toLocaleString()}`);
          cart = [];
          localStorage.removeItem('tr_cart');
          renderCart();
          cartPanel.classList.add('hidden');
        }
      });
      cartPanel.appendChild(confirmBtn);
    }
  }

  function isInCart(courseId) {
    return cart.some(item => item.id === courseId);
  }

  function addToCart(course, btn) {
    if (isInCart(course.id)) return;
    cart.push({ id: course.id, title: course.title, price: course.price });
    localStorage.setItem('tr_cart', JSON.stringify(cart));
    if (btn) {
      btn.textContent = 'Purchased';
      btn.disabled = true;
      btn.style.opacity = '0.5';
      btn.style.cursor = 'not-allowed';
    }
    renderCart();
    const cartPanel = document.getElementById('cartPanel');
    if (cartPanel) cartPanel.classList.remove('hidden');
  }

  function renderPosts(page = 1) {
    const postsContainer = document.getElementById('posts');
    if (!postsContainer) return;
    postsContainer.replaceChildren();

    const totalPages = Math.max(1, Math.ceil((data.posts || []).length / postsPerPage));
    page = Math.min(Math.max(1, page), totalPages);
    currentPage = page;

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    if (prevBtn) {
      prevBtn.style.opacity = page <= 1 ? '0.5' : '1';
      prevBtn.style.cursor = page <= 1 ? 'not-allowed' : 'pointer';
      prevBtn.classList.toggle('disabled', page <= 1);
    }

    if (nextBtn) {
      nextBtn.style.opacity = page >= totalPages ? '0.5' : '1';
      nextBtn.style.cursor = page >= totalPages ? 'not-allowed' : 'pointer';
      nextBtn.classList.toggle('disabled', page >= totalPages);
    }

    document.querySelectorAll('.page-number').forEach((btn, index) => {
      const pageNum = index + 1;
      btn.classList.toggle('active', pageNum === page);
      btn.style.opacity = pageNum === page ? '1' : '0.6';
      btn.style.cursor = pageNum === page ? 'not-allowed' : 'pointer';
    });

    const sorted = [...(data.posts || [])].sort((a, b) => b.creationDate - a.creationDate);
    const postsToShow = sorted.slice((page - 1) * postsPerPage, page * postsPerPage);

    postsToShow.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post';

      const img = document.createElement('img');
      img.src = post.thumbnail;
      img.alt = post.title;

      const content = document.createElement('div');
      content.className = 'post-content';

      const title = document.createElement('h3');
      title.textContent = post.title;

      const date = document.createElement('div');
      date.className = 'post-date';
      date.textContent = post.creationDate.toDateString();

      const desc = document.createElement('p');
      desc.textContent = post.description;

      const tagsDiv = document.createElement('div');
      tagsDiv.className = 'tags';
      tagsDiv.style.marginTop = 'auto';
      tagsDiv.style.marginBottom = '20px';

      (post.tags || []).forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag-item';
        span.textContent = tag;
        tagsDiv.appendChild(span);
      });

      content.append(title, date, desc, tagsDiv);
      postDiv.append(img, content);
      postsContainer.appendChild(postDiv);
    });
  }


  function renderResearchPapers() {
    const container = document.querySelector(".research-list");
    if (!container) return;

    container.replaceChildren();

    data.papers.forEach(paper => {
      const card = document.createElement("div");
      card.className = "research-card";

      const top = document.createElement("div");
      top.className = "research-top";

      const tagsDiv = document.createElement("div");
      tagsDiv.className = "research-tags";
      paper.tags.forEach(tag => {
        const span = document.createElement("span");
        span.textContent = tag.toUpperCase();
        tagsDiv.appendChild(span);
      });

      const dateDiv = document.createElement("div");
      dateDiv.className = "research-date";
      const options = { month: 'long', year: 'numeric' };
      dateDiv.textContent = paper.publishedDate.toLocaleDateString('en-US', options);

      top.append(tagsDiv, dateDiv);

      const title = document.createElement("h3");
      title.textContent = paper.title;

      const authors = document.createElement("div");
      authors.className = "research-authors";
      const authorsList = paper.authors.join(", ");
      authors.innerHTML = `${authorsList} — <i>${paper.journal}</i>`;

      const abstract = document.createElement("p");
      abstract.textContent = paper.abstract;

      const link = document.createElement("a");
      link.className = "pdf-link";
      link.href = paper.pdfUrl;
      link.target = "_blank";

      const icon = document.createElement("i");
      icon.className = "fa-solid fa-file-pdf";

      link.append(icon, " READ PDF");

      card.append(top, title, authors, abstract, link);
      container.appendChild(card);
    });
  }
  renderResearchPapers();

  function createCourseCard(course) {
    cart = JSON.parse(localStorage.getItem('tr_cart') || '[]');

    const card = document.createElement('div');
    card.className = 'course-cards';

    const imageBlock = document.createElement('div');
    imageBlock.className = 'course-image';

    const img = document.createElement('img');
    img.src = course.thumbnail;
    img.alt = course.title;
    imageBlock.appendChild(img);

    const topContainer = document.createElement('div');
    topContainer.className = 'top-container';

    const lang = document.createElement('span');
    lang.className = 'badge-lang';
    lang.textContent = (course.language || '').toUpperCase();
    topContainer.appendChild(lang);

    if (course.technologies && course.technologies.length > 0) {
      const tech = document.createElement('span');
      tech.className = 'badge-tech';
      tech.textContent = course.technologies[0];
      topContainer.appendChild(tech);
    }

    const level = document.createElement('span');
    level.className = `badge-level ${course.level || ''}`;
    level.textContent = course.level || '';

    imageBlock.append(topContainer, level);

    const content = document.createElement('div');
    content.className = 'course-content';

    const title = document.createElement('h3');
    title.textContent = course.title;

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `MGA ${Number(course.price).toLocaleString()}`;

    const description = document.createElement('p');
    description.textContent = course.description;

    const buttons = document.createElement('div');
    buttons.className = 'button-courses';

    const learnBtn = document.createElement('button');
    learnBtn.className = 'learn';
    learnBtn.textContent = 'Learn more';

    const cartBtn = document.createElement('button');
    cartBtn.className = 'cart';
    cartBtn.textContent = 'Add to cart';
    if (isInCart(course.id)) {
      cartBtn.textContent = 'Purchased';
      cartBtn.disabled = true;
      cartBtn.style.opacity = '0.5';
      cartBtn.style.cursor = 'not-allowed';
    }
    cartBtn.addEventListener('click', () => addToCart(course, cartBtn));

    buttons.append(learnBtn, cartBtn);
    content.append(title, price, description, buttons);
    card.append(imageBlock, content);
    return card;
  }

  function renderTestimonials(role, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.replaceChildren();

    const filtered = (data.testimonials || []).filter(t => t.role === role);

    filtered.forEach(t => {
      const card = document.createElement('div');
      card.className = 'testimonial-card';

      const cardElementsContainer = document.createElement('div');
      cardElementsContainer.className = 'card-elements-container tag';

      const top = document.createElement('div');
      top.className = 'testimonial-top';

      const img = document.createElement('img');
      img.src = t.thumbnail;
      img.alt = t.author || '';

      const info = document.createElement('div');
      const author = document.createElement('div');
      author.className = 'author';
      author.textContent = t.author;

      const roleDiv = document.createElement('div');
      roleDiv.className = 'role';
      roleDiv.textContent = role;

      info.append(author, roleDiv);
      top.append(img, info);

      const text = document.createElement('p');
      text.className = 'testimonial-text';
      text.textContent = t.description;

      if (role === 'collaborator') {
        text.classList.add('collaborator');
        cardElementsContainer.append(text, top);
        card.append(cardElementsContainer);

      } else if (role === 'customer') {
        cardElementsContainer.append(text, top);
        card.classList.add('customer');
        card.style.backgroundColor = 'rgba(247, 243, 243, 0.5)';
        cardElementsContainer.style.marginBottom = '0vh';
        cardElementsContainer.style.marginTop = '2vh';
        const starsDiv = document.createElement('div');
        starsDiv.className = 'stars';
        for (let i = 0; i < t.rating; i++) starsDiv.appendChild(createStarIcon());
        card.append(starsDiv, cardElementsContainer);

      } else {
        const starsDiv = document.createElement('div');
        starsDiv.className = 'stars';
        for (let i = 0; i < t.rating; i++) starsDiv.appendChild(createStarIcon());
        cardElementsContainer.append(top, text);
        card.append(cardElementsContainer, starsDiv);
        card.style.backgroundColor = 'rgba(247, 243, 243, 0.5)';
      }

      container.appendChild(card);
    });
  }

  function renderHomeCourses() {
    const container = document.getElementById('home-courses-container');
    if (!container) return;
    container.replaceChildren();

    (data.homeCourses || []).forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';

      const topSection = document.createElement('div');

      const badge = document.createElement('div');
      badge.className = `badge ${course.tag === 'Development' ? 'red' : 'dark'}`;
      badge.textContent = course.tag;

      const title = document.createElement('h3');
      title.textContent = course.title;
      topSection.append(badge, title);

      const infoSection = document.createElement('div');
      infoSection.className = 'course-info';

      const mode = document.createElement('span');
      mode.textContent = course.mode;

      const duration = document.createElement('span');
      duration.textContent = course.duration;

      infoSection.append(mode, duration);
      card.append(topSection, infoSection);
      container.appendChild(card);
    });
  }

  function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    const leftCol = document.createElement('div');
    leftCol.className = 'exp-column left';

    const rightCol = document.createElement('div');
    rightCol.className = 'exp-column';

    (data.experiences || []).forEach((exp, index) => {
      const expItem = document.createElement('div');
      expItem.className = 'exp-item';

      if (index === 2) {
        const span = document.createElement('span');
        span.className = 'exp-span';
        expItem.appendChild(span);
      }

      const date = document.createElement('div');
      date.className = 'date';
      date.textContent = exp.year;

      const role = document.createElement('h3');
      role.textContent = exp.role;

      const org = document.createElement('div');
      org.className = 'place';
      org.textContent = exp.org.toUpperCase();

      const desc = document.createElement('p');
      desc.textContent = exp.desc;

      expItem.append(date, role, org, desc);
      (index % 2 === 0 ? leftCol : rightCol).appendChild(expItem);
    });

    container.append(leftCol, rightCol);
  }

  (function filtersModule() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;

    const techFilter = document.getElementById('techFilter');
    const levelFilter = document.getElementById('levelFilter');
    const priceMinInput = document.getElementById('priceMin');
    const priceMaxInput = document.getElementById('priceMax');
    const priceText = document.getElementById('priceText');
    const searchFilter = document.getElementById('searchFilter');
    const flagElements = Array.from(document.querySelectorAll('[data-lang]'));
    const clearBtn = document.getElementById('clearFilters');

    let selectedLang = 'all';
    let selectedTech = 'all';
    let selectedLevel = 'all';
    let minPrice = priceMinInput ? Number(priceMinInput.value) : 0;
    let maxPrice = priceMaxInput ? Number(priceMaxInput.value) : Infinity;
    let searchQuery = '';

    function normalizeMinMax() {
      if (Number.isFinite(minPrice) && Number.isFinite(maxPrice) && minPrice > maxPrice) {
        [minPrice, maxPrice] = [maxPrice, minPrice];
        if (priceMinInput) priceMinInput.value = minPrice;
        if (priceMaxInput) priceMaxInput.value = maxPrice;
      }
    }

    function renderFilteredCourses() {
      normalizeMinMax();
      coursesGrid.replaceChildren();

      const filtered = (data.courses || []).filter(course => {
        if (selectedLang !== 'all' && (course.language || '').toUpperCase() !== selectedLang) return false;
        if (selectedTech !== 'all' && (!Array.isArray(course.technologies) || !course.technologies.includes(selectedTech))) return false;
        if (selectedLevel !== 'all' && course.level !== selectedLevel) return false;

        const p = Number(course.price);
        if (!Number.isFinite(p)) return false;
        if (Number.isFinite(minPrice) && p < minPrice) return false;
        if (Number.isFinite(maxPrice) && p > maxPrice) return false;

        if (searchQuery) {
          const hay = (course.title + ' ' + course.description + ' ' + (course.technologies || []).join(' ')).toLowerCase();
          if (!hay.includes(searchQuery.toLowerCase())) return false;
        }

        return true;
      });

      if (filtered.length === 0) {
        const msg = document.createElement('div');
        const clear = document.createElement('p');
        clear.classList ='clear2';
        clear.textContent = 'Clear all';
        clear.addEventListener('click', () => {
          selectedLang = 'all';
          selectedTech = 'all';
          selectedLevel = 'all';
          searchQuery = '';
          minPrice = priceMinInput ? Number(priceMinInput.min || 0) : 0;
          maxPrice = priceMaxInput ? Number(priceMaxInput.max || priceMaxInput.value) : Infinity;
          techFilter && (techFilter.value = 'all');
          levelFilter && (levelFilter.value = 'all');
          searchFilter && (searchFilter.value = '');
          if (priceMinInput) priceMinInput.value = priceMinInput.min || 0;
          if (priceMaxInput) priceMaxInput.value = priceMaxInput.max || priceMaxInput.value;
          priceText && (priceText.textContent = `${minPrice.toLocaleString()} Ar – ${maxPrice.toLocaleString()} Ar`);
          flagElements.forEach(f => f.classList.remove('selected-flag'));
          renderFilteredCourses();
        })
        msg.className = 'no-results';
        msg.textContent = 'No courses match your filters.';
        coursesGrid.appendChild(msg);
        msg.append(clear);

        return;
      }

      filtered.forEach(course => coursesGrid.appendChild(createCourseCard(course)));
    }

    techFilter?.addEventListener('change', e => { selectedTech = e.target.value || 'all'; renderFilteredCourses(); });
    levelFilter?.addEventListener('change', e => { selectedLevel = e.target.value || 'all'; renderFilteredCourses(); });

    if (priceMinInput && priceMaxInput && priceText) {
      minPrice = Number(priceMinInput.value || priceMinInput.min || 0);
      maxPrice = Number(priceMaxInput.value || priceMaxInput.max || 300000);
      normalizeMinMax();
      priceText.textContent = `${minPrice.toLocaleString()} Ar – ${maxPrice.toLocaleString()} Ar`;

      priceMinInput.addEventListener('input', e => {
        minPrice = Number(e.target.value);
        normalizeMinMax();
        priceText.textContent = `${minPrice.toLocaleString()} Ar – ${maxPrice.toLocaleString()} Ar`;
        renderFilteredCourses();
      });

      priceMaxInput.addEventListener('input', e => {
        maxPrice = Number(e.target.value);
        normalizeMinMax();
        priceText.textContent = `${minPrice.toLocaleString()} Ar – ${maxPrice.toLocaleString()} Ar`;
        renderFilteredCourses();
      });
    }

    if (searchFilter) {
      let debounce = null;
      searchFilter.addEventListener('input', e => {
        clearTimeout(debounce);
        debounce = setTimeout(() => { searchQuery = e.target.value.trim(); renderFilteredCourses(); }, 200);
      });
    }

    flagElements.forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const lang = el.getAttribute('data-lang');
        if (!lang) return;
        if (selectedLang === lang) {
          selectedLang = 'all';
          el.classList.remove('selected-flag');
        } else {
          selectedLang = lang;
          flagElements.forEach(f => f.classList.remove('selected-flag'));
          el.classList.add('selected-flag');
        }
        renderFilteredCourses();
      });
    });

    clearBtn?.addEventListener('click', () => {
      selectedLang = 'all'; selectedTech = 'all'; selectedLevel = 'all'; searchQuery = '';
      minPrice = priceMinInput ? Number(priceMinInput.min || 0) : 0;
      maxPrice = priceMaxInput ? Number(priceMaxInput.max || priceMaxInput.value) : Infinity;
      techFilter && (techFilter.value = 'all');
      levelFilter && (levelFilter.value = 'all');
      searchFilter && (searchFilter.value = '');
      if (priceMinInput) priceMinInput.value = priceMinInput.min || 0;
      if (priceMaxInput) priceMaxInput.value = priceMaxInput.max || priceMaxInput.value;
      priceText && (priceText.textContent = `${minPrice.toLocaleString()} Ar – ${maxPrice.toLocaleString()} Ar`);
      flagElements.forEach(f => f.classList.remove('selected-flag'));
      renderFilteredCourses();
    });

    window.renderFilteredCourses = renderFilteredCourses;
    renderFilteredCourses();
  })();

  const cartIcon = document.querySelector('.cart-icon-wrapper');
  const cartPanel = document.getElementById('cartPanel');
  if (cartIcon && cartPanel) {
    cartIcon.addEventListener('click', () => {
      cart = JSON.parse(localStorage.getItem('tr_cart') || '[]');
      renderCart();
      cartPanel.classList.toggle('hidden');
    });
  }

  const logo = document.querySelector('.logo a');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      const nav = document.querySelector('nav');
      nav.classList.toggle('open');
    });
  }

  document.querySelectorAll('.price-filter').forEach(input => {
    input.addEventListener('input', function () {
      const value = (this.value - this.min) / (this.max - this.min) * 100;
      this.style.background = `linear-gradient(to right, #a30010 ${value}%, #ddd ${value}%)`;
    });
  });
  document.addEventListener('DOMContentLoaded', () => {

    const p1 = document.getElementById('about-part1');
    const p2 = document.getElementById('about-part2');
    if (p1) p1.textContent = data.aboutMe_part1;
    if (p2) p2.textContent = data.aboutMe_part2;

    (data.overview || []).forEach((item, index) => {
      const ids = ['exp-years', 'students-taught', 'topics'];
      const target = document.getElementById(ids[index]);
      if (target) target.textContent = item.number;
    });

    cart = JSON.parse(localStorage.getItem('tr_cart') || '[]');
    renderCart();

    cart = JSON.parse(localStorage.getItem('tr_cart') || '[]');
    renderCart();

    renderPosts(currentPage);

    const archivesContainer = document.getElementById('archives');
    if (archivesContainer) {
      archivesContainer.replaceChildren();
      (data.archives || []).forEach(archive => {
        const div = document.createElement('div');
        div.className = 'archive-item';
        const label = document.createElement('span');
        label.textContent = archive.label;
        const count = document.createElement('span');
        count.textContent = archive.count;
        div.append(label, count);
        archivesContainer.appendChild(div);
      });
    }


    const videosContainer = document.getElementById('videos');
    if (videosContainer) {
      videosContainer.replaceChildren();
      (data.youtubeVideos || []).forEach(video => {
        const div = document.createElement('div');
        div.className = 'video';
        const img = document.createElement('img');
        img.src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
        img.alt = video.title;
        const vTitle = document.createElement('div');
        vTitle.className = 'video-title';
        vTitle.textContent = video.title;
        div.append(img, vTitle);
        videosContainer.appendChild(div);
      });
    }

    const newsletterInput = document.querySelector('.newsletter input[type="email"]');
    const newsletterButton = document.querySelector('.newsletter button');
    if (newsletterInput && newsletterButton) {
      const trySubscribe = () => {
        const email = (newsletterInput.value || '').trim();
        if (!email || !email.includes('@') || !email.includes('.')) {
          alert('Invalid mail !');
          newsletterInput.style.borderColor = '#e53935';
          newsletterInput.focus();
          return;
        }

        const parent = newsletterInput.parentElement;
        if (!parent) return;

        newsletterInput.style.display = 'none';
        newsletterButton.style.display = 'none';

        let message = parent.querySelector('.newsletter-success');
        if (!message) {
          message = document.createElement('div');
          message.className = 'newsletter-success';
          parent.appendChild(message);
        }
        message.textContent = "You're in ! Talk Soon";
        message.style.color = '#b3001b';
        message.style.marginTop = '10px';
        message.style.fontWeight = 'bold';
      };

      newsletterButton.addEventListener('click', trySubscribe);

      newsletterInput.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
          trySubscribe();
        }
      });
    }

    document.getElementById('prev')?.addEventListener('click', () => {
      if (currentPage > 1) { currentPage--; renderPosts(currentPage); }
    });
    document.getElementById('next')?.addEventListener('click', () => {
      const totalPages = Math.ceil((data.posts || []).length / postsPerPage);
      if (currentPage < totalPages) { currentPage++; renderPosts(currentPage); }
    });

    document.querySelectorAll('.page-number').forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const targetPage = index + 1;
        if (targetPage !== currentPage) {
          currentPage = targetPage;
          renderPosts(currentPage);
        }
      });
    });

    renderHomeCourses();
    renderExperience();

    renderTestimonials('student', 'students');
    renderTestimonials('collaborator', 'collaborators');
    renderTestimonials('customer', 'customers');
  });

  (function injectStyles() {
    const css = `[data-lang].selected-flag{outline:2px solid #2b6cb0;border-radius:6px;transform:translateY(-2px);}
                 .no-results{padding:2rem;color:#666;text-align:center;}`;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  })();

})();


(function () {
  const burger = document.getElementById('burger');
  const nav = document.querySelector('nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('open');
      nav.classList.remove('open');
    });
  });
})();


const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

const logo = document.querySelector(".logo a");

logo.addEventListener("click", (e) => {
  e.preventDefault();
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});