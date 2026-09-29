const serviceData = [
  { 서비스ID: "S001", 서비스명: "주민등록등본 발급", 소관기관: "주민센터", 민원분야: "주민등록", 온라인처리: "가능", 처리기한일: 7, 수수료: 500 },
  { 서비스ID: "S002", 서비스명: "전입신고", 소관기관: "복지정책과", 민원분야: "주민등록", 온라인처리: "불가", 처리기한일: 1, 수수료: 0 },
  { 서비스ID: "S003", 서비스명: "인감증명 발급", 소관기관: "복지정책과", 민원분야: "주민등록", 온라인처리: "가능", 처리기한일: 1, 수수료: 0 },
  { 서비스ID: "S004", 서비스명: "주민등록증 재발급", 소관기관: "건축과", 민원분야: "주민등록", 온라인처리: "가능", 처리기한일: 0, 수수료: 0 },
  { 서비스ID: "S005", 서비스명: "건축물대장 발급", 소관기관: "구청 민원봉사과", 민원분야: "건축", 온라인처리: "불가", 처리기한일: 0, 수수료: 1000 },
  { 서비스ID: "S006", 서비스명: "건축허가 신청", 소관기관: "건축과", 민원분야: "건축", 온라인처리: "불가", 처리기한일: 1, 수수료: 2000 },
  { 서비스ID: "S007", 서비스명: "용도변경 신고", 소관기관: "시청 민원과", 민원분야: "건축", 온라인처리: "불가", 처리기한일: 0, 수수료: 0 },
  { 서비스ID: "S008", 서비스명: "지방세 납부확인서", 소관기관: "건축과", 민원분야: "세무", 온라인처리: "가능", 처리기한일: 1, 수수료: 1000 },
  { 서비스ID: "S009", 서비스명: "취득세 신고", 소관기관: "교통행정과", 민원분야: "세무", 온라인처리: "가능", 처리기한일: 0, 수수료: 0 },
  { 서비스ID: "S010", 서비스명: "재산세 조회", 소관기관: "교통행정과", 민원분야: "세무", 온라인처리: "가능", 처리기한일: 3, 수수료: 0 },
  { 서비스ID: "S011", 서비스명: "기초연금 신청", 소관기관: "건축과", 민원분야: "복지", 온라인처리: "가능", 처리기한일: 7, 수수료: 500 },
  { 서비스ID: "S012", 서비스명: "복지급여 조회", 소관기관: "시청 민원과", 민원분야: "복지", 온라인처리: "가능", 처리기한일: 14, 수수료: 5000 },
  { 서비스ID: "S013", 서비스명: "장애인 등록", 소관기관: "주민센터", 민원분야: "복지", 온라인처리: "가능", 처리기한일: 5, 수수료: 0 },
  { 서비스ID: "S014", 서비스명: "자동차 등록", 소관기관: "주민센터", 민원분야: "교통", 온라인처리: "가능", 처리기한일: 1, 수수료: 5000 },
  { 서비스ID: "S015", 서비스명: "운전면허 갱신", 소관기관: "교통행정과", 민원분야: "교통", 온라인처리: "불가", 처리기한일: 1, 수수료: 0 },
  { 서비스ID: "S016", 서비스명: "주정차 위반 조회", 소관기관: "주민센터", 민원분야: "교통", 온라인처리: "가능", 처리기한일: 7, 수수료: 1000 },
  { 서비스ID: "S017", 서비스명: "배출시설 신고", 소관기관: "주민센터", 민원분야: "환경", 온라인처리: "가능", 처리기한일: 1, 수수료: 0 },
  { 서비스ID: "S018", 서비스명: "폐기물 처리 신청", 소관기관: "시청 민원과", 민원분야: "환경", 온라인처리: "가능", 처리기한일: 14, 수수료: 5000 },
  { 서비스ID: "S019", 서비스명: "식품영업 신고", 소관기관: "건축과", 민원분야: "위생", 온라인처리: "가능", 처리기한일: 3, 수수료: 2000 },
  { 서비스ID: "S020", 서비스명: "위생업소 조회", 소관기관: "시청 민원과", 민원분야: "위생", 온라인처리: "불가", 처리기한일: 7, 수수료: 500 },
  { 서비스ID: "S021", 서비스명: "여권 발급 신청", 소관기관: "건축과", 민원분야: "여권", 온라인처리: "가능", 처리기한일: 7, 수수료: 1000 },
  { 서비스ID: "S022", 서비스명: "여권 재발급", 소관기관: "교통행정과", 민원분야: "여권", 온라인처리: "가능", 처리기한일: 1, 수수료: 1000 }
];

let currentFilter = {
  keyword: "",
  category: "",
  dept: "",
  online: "all",
  sortBy: "id-asc",
  currentView: "table"
};

const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const deptFilter = document.getElementById('deptFilter');
const sortBy = document.getElementById('sortBy');
const resetBtn = document.getElementById('resetBtn');
const emptyResetBtn = document.getElementById('emptyResetBtn');
const resultCount = document.getElementById('resultCount');

const serviceTableBody = document.getElementById('serviceTableBody');
const cardView = document.getElementById('cardView');
const tableView = document.getElementById('tableView');
const emptyState = document.getElementById('emptyState');

const viewTableBtn = document.getElementById('viewTableBtn');
const viewCardBtn = document.getElementById('viewCardBtn');
const categoryChips = document.getElementById('categoryChips');

document.addEventListener('DOMContentLoaded', () => {
  populateDropdowns();
  populateQuickChips();
  render();
  setupEventListeners();
});

function populateDropdowns() {
  const categories = [...new Set(serviceData.map(item => item.민원분야))];
  const depts = [...new Set(serviceData.map(item => item.소관기관))];

  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });

  depts.forEach(dept => {
    const opt = document.createElement('option');
    opt.value = dept;
    opt.textContent = dept;
    deptFilter.appendChild(opt);
  });
}

function populateQuickChips() {
  const categories = [...new Set(serviceData.map(item => item.민원분야))];
  categories.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = "text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200 transition font-medium";
    chip.textContent = `#${cat}`;
    chip.addEventListener('click', () => {
      categoryFilter.value = cat;
      currentFilter.category = cat;
      render();
    });
    categoryChips.appendChild(chip);
  });
}

function getFilteredData() {
  return serviceData.filter(item => {
    const matchKeyword = !currentFilter.keyword || 
      item.서비스명.toLowerCase().includes(currentFilter.keyword.toLowerCase());

    const matchCategory = !currentFilter.category || 
      item.민원분야 === currentFilter.category;

    const matchDept = !currentFilter.dept || 
      item.소관기관 === currentFilter.dept;

    const matchOnline = currentFilter.online === 'all' || 
      item.온라인처리 === currentFilter.online;

    return matchKeyword && matchCategory && matchDept && matchOnline;
  }).sort((a, b) => {
    switch (currentFilter.sortBy) {
      case 'name-asc':
        return a.서비스명.localeCompare(b.서비스명, 'ko');
      case 'period-asc':
        return a.처리기한일 - b.처리기한일;
      case 'fee-asc':
        return a.수수료 - b.수수료;
      case 'id-asc':
      default:
        return a.서비스ID.localeCompare(b.서비스ID);
    }
  });
}

function render() {
  const filtered = getFilteredData();
  
  resultCount.textContent = `${filtered.length}건 / 총 ${serviceData.length}건`;

  if (filtered.length === 0) {
    tableView.classList.add('hidden');
    cardView.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  if (currentFilter.currentView === 'table') {
    tableView.classList.remove('hidden');
    cardView.classList.add('hidden');
    renderTable(filtered);
  } else {
    tableView.classList.add('hidden');
    cardView.classList.remove('hidden');
    renderCards(filtered);
  }
}

function highlightText(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, 'gi');
  return text.replace(regex, '<mark class="highlight">$1</mark>');
}

function renderTable(data) {
  serviceTableBody.innerHTML = '';

  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 border-b border-slate-100 transition";

    const onlineBadge = item.온라인처리 === '가능'
      ? `<span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-0.5 rounded-full font-medium"><i class="fa-solid fa-circle-check text-[10px]"></i> 가능</span>`
      : `<span class="inline-flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-200 text-xs px-2.5 py-0.5 rounded-full font-medium"><i class="fa-solid fa-circle-xmark text-[10px]"></i> 불가</span>`;

    const periodText = item.처리기한일 === 0 
      ? `<span class="font-semibold text-emerald-600">즉시 (당일)</span>` 
      : `${item.처리기한일}일`;

    const feeText = item.수수료 === 0 
      ? `<span class="text-slate-400 font-medium">무료</span>` 
      : `${item.수수료.toLocaleString()}원`;

    tr.innerHTML = `
      <td class="py-3.5 px-4 text-center text-xs font-mono text-slate-400">${item.서비스ID}</td>
      <td class="py-3.5 px-4 font-semibold text-slate-900">${highlightText(item.서비스명, currentFilter.keyword)}</td>
      <td class="py-3.5 px-4 text-slate-600">${item.소관기관}</td>
      <td class="py-3.5 px-4"><span class="bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs px-2 py-0.5 rounded font-medium">${item.민원분야}</span></td>
      <td class="py-3.5 px-4 text-center">${onlineBadge}</td>
      <td class="py-3.5 px-4 text-center font-medium">${periodText}</td>
      <td class="py-3.5 px-4 text-right font-medium">${feeText}</td>
    `;
    serviceTableBody.appendChild(tr);
  });
}

function renderCards(data) {
  cardView.innerHTML = '';

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = "card-item bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col justify-between";

    const onlineBadge = item.온라인처리 === '가능'
      ? `<span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2 py-0.5 rounded-full font-medium"><i class="fa-solid fa-circle-check text-[10px]"></i> 온라인 가능</span>`
      : `<span class="inline-flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-200 text-xs px-2 py-0.5 rounded-full font-medium"><i class="fa-solid fa-circle-xmark text-[10px]"></i> 온라인 불가</span>`;

    const periodText = item.처리기한일 === 0 ? '즉시 (당일)' : `${item.처리기한일}일 소요`;
    const feeText = item.수수료 === 0 ? '무료' : `${item.수수료.toLocaleString()}원`;

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs px-2 py-0.5 rounded font-semibold">${item.민원분야}</span>
          <span class="text-xs font-mono text-slate-400">${item.서비스ID}</span>
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-1">${highlightText(item.서비스명, currentFilter.keyword)}</h3>
        <p class="text-xs text-slate-500 mb-4 flex items-center gap-1">
          <i class="fa-solid fa-building text-slate-400"></i> ${item.소관기관}
        </p>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <div class="space-y-1">
          <div class="text-slate-500">처리기한: <strong class="text-slate-700 font-semibold">${periodText}</strong></div>
          <div class="text-slate-500">수수료: <strong class="text-slate-700 font-semibold">${feeText}</strong></div>
        </div>
        <div>${onlineBadge}</div>
      </div>
    `;
    cardView.appendChild(card);
  });
}

function setupEventListeners() {
  searchInput.addEventListener('input', (e) => {
    currentFilter.keyword = e.target.value.trim();
    clearSearchBtn.classList.toggle('hidden', !currentFilter.keyword);
    render();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentFilter.keyword = '';
    clearSearchBtn.classList.add('hidden');
    render();
  });

  categoryFilter.addEventListener('change', (e) => {
    currentFilter.category = e.target.value;
    render();
  });

  deptFilter.addEventListener('change', (e) => {
    currentFilter.dept = e.target.value;
    render();
  });

  document.querySelectorAll('.online-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.online-btn').forEach(b => b.classList.remove('active-tab', 'text-slate-600'));
      e.target.classList.add('active-tab');
      currentFilter.online = e.target.getAttribute('data-value');
      render();
    });
  });

  sortBy.addEventListener('change', (e) => {
    currentFilter.sortBy = e.target.value;
    render();
  });

  const resetAll = () => {
    searchInput.value = '';
    categoryFilter.value = '';
    deptFilter.value = '';
    sortBy.value = 'id-asc';
    clearSearchBtn.classList.add('hidden');

    currentFilter = {
      keyword: "",
      category: "",
      dept: "",
      online: "all",
      sortBy: "id-asc",
      currentView: currentFilter.currentView
    };

    document.querySelectorAll('.online-btn').forEach(b => {
      b.classList.remove('active-tab');
      if (b.getAttribute('data-value') === 'all') b.classList.add('active-tab');
    });

    render();
  };

  resetBtn.addEventListener('click', resetAll);
  emptyResetBtn.addEventListener('click', resetAll);

  viewTableBtn.addEventListener('click', () => {
    currentFilter.currentView = 'table';
    viewTableBtn.className = "px-2.5 py-1 rounded bg-white text-slate-800 shadow-sm font-medium";
    viewCardBtn.className = "px-2.5 py-1 rounded text-slate-600 hover:text-slate-900 font-medium";
    render();
  });

  viewCardBtn.addEventListener('click', () => {
    currentFilter.currentView = 'card';
    viewCardBtn.className = "px-2.5 py-1 rounded bg-white text-slate-800 shadow-sm font-medium";
    viewTableBtn.className = "px-2.5 py-1 rounded text-slate-600 hover:text-slate-900 font-medium";
    render();
  });
}
