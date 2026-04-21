// ==================== DỮ LIỆU Y TẾ ====================
const monthlyData = {
    kham: {
        2021: [1167, 669, 1721, 1346, 687, 959, 800, 303, 228, 615, 429, 156],
        2022: [115, 203, 406, 435, 659, 749, 670, 642, 551, 564, 677, 489],
        2023: [199, 577, 714, 462, 604, 427, 251, 137, 144, 144, 96, 72],
        2024: [53, 83, 118, 80, 114, 108, 105, 123, 286, 344, 391, 373],
        2025: [152, 321, 338, 324, 379, 403, 428, 361, 386, 295, 331, 307],
        2026: [268, 110, 416, null, null, null, null, null, null, null, null, null]
    },
    noitru: {
        2021: [268, 139, 483, 597, 176, 152, 237, 42, 32, 132, 416, 313],
        2022: [20, 30, 122, 184, 200, 320, 383, 424, 230, 247, 287, 290],
        2023: [110, 120, 374, 406, 187, 298, 318, 207, 104, 114, 105, 121],
        2024: [57, 32, 121, 127, 78, 90, 102, 107, 133, 208, 293, 270],
        2025: [162, 321, 388, 324, 379, 403, 428, 361, 386, 295, 331, 307],
        2026: [146, 108, 228, null, null, null, null, null, null, null, null, null]
    },
    ngaydt: {
        2021: [4759, 1859, 7076, 9494, 2587, 2262, 3769, 353, 417, 1368, 5395, 4324],
        2022: [174, 289, 1818, 2591, 3071, 5460, 6923, 6994, 3454, 4276, 4800, 5378],
        2023: [1866, 1721, 6963, 7610, 2756, 5658, 5323, 3470, 1783, 2174, 2274, 2707],
        2024: [1140, 539, 2126, 2068, 1150, 1570, 1754, 1745, 2298, 4271, 4879, 3923],
        2025: [2172, 1391, 4679, 5288, 3560, 4217, 5546, 6008, 3552, 5779, 3331, 4962],
        2026: [2079, 1481, 3334, null, null, null, null, null, null, null, null, null]
    }
};

// ==================== SỐ GIƯỜNG KẾ HOẠCH THEO NĂM ====================
const soGiuongKH = { 2021: 190, 2022: 190, 2023: 190, 2024: 170, 2025: 150, 2026: 150 };

// ==================== KẾ HOẠCH NĂM (CHỈ TIÊU GIAO) ====================
const keHoachNam = {
    kham: { 2021: 14037, 2022: 14037, 2023: 22027, 2024: 4400, 2025: 2396, 2026: 3590 },
    noitru: { 2021: 4037, 2022: 3853, 2023: 3777, 2024: 2860, 2025: 1780, 2026: 2890 },
    ngaydt: { 2021: 70953, 2022: 69350, 2023: 62415, 2024: 62050, 2025: 30209, 2026: 52013 },
    ngaytb: { 2021: 17.6, 2022: 18.0, 2023: 16.5, 2024: 21.7, 2025: 17.0, 2026: 18.0 },
    congsuat: { 2021: 100, 2022: 100, 2023: 100, 2024: 100, 2025: 100, 2026: 100 }
};

// ==================== HẰNG SỐ ====================
const monthsShort = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
const monthsFull = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
const soNgayTrongThang = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// ==================== BIẾN TOÀN CỤC ====================
let currentYear = 2026;
let compareYear = 2025;
let currentMetric = 'kham';
let chartInstance = null;

// ==================== HÀM TIỆN ÍCH ====================
function isNamNhuan(nam) {
    return (nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0);
}

function sumIgnoreNull(arr) {
    if (!arr) return 0;
    return arr.filter(v => v !== null).reduce((a, b) => a + b, 0);
}

function countValid(arr) {
    return arr ? arr.filter(v => v !== null).length : 0;
}

function formatValue(value, metric, isKh = false) {
    if (value === null || value === undefined) return '—';
    if (metric === 'congsuat') return value.toFixed(1) + '%';
    if (metric === 'ngaytb') return value.toFixed(1);
    if (isKh && metric === 'kham') return value.toLocaleString('vi-VN');
    return value.toLocaleString('vi-VN');
}

// ==================== TÍNH NGÀY ĐT TRUNG BÌNH ====================
// Công thức: Ngày ĐT TB = Tổng ngày điều trị / Tổng số nội trú
function tinhNgayDTTrungBinhThang(nam, thang) {
    const ngaydt = monthlyData.ngaydt[nam]?.[thang];
    const noitru = monthlyData.noitru[nam]?.[thang];
    if (ngaydt === null || noitru === null || noitru === 0) return null;
    return ngaydt / noitru;
}

function tinhNgayDTTrungBinhNam(nam) {
    const ngaydt = monthlyData.ngaydt[nam];
    const noitru = monthlyData.noitru[nam];
    if (!ngaydt || !noitru) return 0;
    
    let tongNgaydt = 0;
    let tongNoitru = 0;
    
    for (let i = 0; i < 12; i++) {
        if (ngaydt[i] !== null && noitru[i] !== null) {
            tongNgaydt += ngaydt[i];
            tongNoitru += noitru[i];
        }
    }
    
    return tongNoitru > 0 ? tongNgaydt / tongNoitru : 0;
}

function getNgayDTTrungBinhTheoThang(nam) {
    const result = [];
    for (let i = 0; i < 12; i++) {
        result.push(tinhNgayDTTrungBinhThang(nam, i));
    }
    return result;
}

// ==================== TÍNH CÔNG SUẤT GIƯỜNG ====================
// Công thức: Công suất = (Ngày điều trị) / (Số giường KH × Số ngày trong tháng) × 100%
function tinhCongSuatThang(nam, thang) {
    const ngaydt = monthlyData.ngaydt[nam]?.[thang];
    if (ngaydt === null) return null;
    
    const soGiuong = soGiuongKH[nam];
    let ngayTrongThang = soNgayTrongThang[thang];
    if (thang === 1 && isNamNhuan(nam)) ngayTrongThang = 29;
    
    return (ngaydt / (soGiuong * ngayTrongThang)) * 100;
}

function tinhCongSuatTrungBinhNam(nam) {
    const ngaydt = monthlyData.ngaydt[nam];
    if (!ngaydt) return 0;
    
    let tongNgaydt = 0;
    let tongNgayTrongThang = 0;
    const soGiuong = soGiuongKH[nam];
    
    for (let i = 0; i < 12; i++) {
        if (ngaydt[i] !== null) {
            tongNgaydt += ngaydt[i];
            let ngayTrongThang = soNgayTrongThang[i];
            if (i === 1 && isNamNhuan(nam)) ngayTrongThang = 29;
            tongNgayTrongThang += ngayTrongThang;
        }
    }
    
    if (tongNgayTrongThang === 0) return 0;
    return (tongNgaydt / (soGiuong * tongNgayTrongThang)) * 100;
}

function getCongSuatTheoThang(nam) {
    const result = [];
    for (let i = 0; i < 12; i++) {
        result.push(tinhCongSuatThang(nam, i));
    }
    return result;
}

// ==================== TÍNH % HOÀN THÀNH KẾ HOẠCH ====================
function tinhPhanTramHT(actual, kh) {
    if (!kh || kh === 0) return 0;
    return (actual / kh) * 100;
}

// ==================== TÍNH CHÊNH LỆCH ====================
function getChangeInfo(curr, prev) {
    if (prev === 0) return { percent: 0, icon: '→', colorClass: '' };
    const percent = ((curr - prev) / prev * 100).toFixed(1);
    const isUp = curr > prev;
    return {
        percent: Math.abs(percent),
        icon: isUp ? '↑' : '↓',
        colorClass: isUp ? 'trend-up' : 'trend-down'
    };
}

function getColorByPercent(percent) {
    if (percent >= 100) return '#2dd4bf';
    if (percent >= 90) return '#facc15';
    return '#fb7185';
}

// ==================== CẬP NHẬT DASHBOARD ====================
function updateDashboard() {
    const year = currentYear;
    const prevYear = compareYear;
    
    // ===== TÍNH TOÁN NĂM HIỆN TẠI =====
    const tongKham = sumIgnoreNull(monthlyData.kham[year]);
    const tongNoitru = sumIgnoreNull(monthlyData.noitru[year]);
    const tongNgaydt = sumIgnoreNull(monthlyData.ngaydt[year]);
    const tbNgaydt = tinhNgayDTTrungBinhNam(year);
    const tbCongsuat = tinhCongSuatTrungBinhNam(year);
    
    // ===== TÍNH TOÁN NĂM SO SÁNH =====
    const tongKhamPrev = sumIgnoreNull(monthlyData.kham[prevYear]);
    const tongNoitruPrev = sumIgnoreNull(monthlyData.noitru[prevYear]);
    const tongNgaydtPrev = sumIgnoreNull(monthlyData.ngaydt[prevYear]);
    const tbNgaydtPrev = tinhNgayDTTrungBinhNam(prevYear);
    const tbCongsuatPrev = tinhCongSuatTrungBinhNam(prevYear);
    
    // ===== KẾ HOẠCH VÀ % HOÀN THÀNH =====
    const kh = {
        kham: keHoachNam.kham[year],
        noitru: keHoachNam.noitru[year],
        ngaydt: keHoachNam.ngaydt[year],
        ngaytb: keHoachNam.ngaytb[year],
        congsuat: keHoachNam.congsuat[year]
    };
    
    const ht = {
        kham: tinhPhanTramHT(tongKham, kh.kham),
        noitru: tinhPhanTramHT(tongNoitru, kh.noitru),
        ngaydt: tinhPhanTramHT(tongNgaydt, kh.ngaydt),
        ngaytb: tinhPhanTramHT(tbNgaydt, kh.ngaytb),
        congsuat: tinhPhanTramHT(tbCongsuat, kh.congsuat)
    };
    
    // ==================== KPI CARDS ====================
    const kpis = [
        { title: 'Tổng lượt khám', curr: tongKham, prev: tongKhamPrev, kh: kh.kham, ht: ht.kham, unit: 'lượt', type: 'kham' },
        { title: 'Tổng lượt nội trú', curr: tongNoitru, prev: tongNoitruPrev, kh: kh.noitru, ht: ht.noitru, unit: 'lượt', type: 'noitru' },
        { title: 'Tổng ngày điều trị', curr: tongNgaydt, prev: tongNgaydtPrev, kh: kh.ngaydt, ht: ht.ngaydt, unit: 'ngày', type: 'ngaydt' },
        { title: 'Ngày ĐT trung bình', curr: tbNgaydt, prev: tbNgaydtPrev, kh: kh.ngaytb, ht: ht.ngaytb, unit: 'ngày', type: 'ngaytb' },
        { title: 'Công suất thực tế', curr: tbCongsuat, prev: tbCongsuatPrev, kh: kh.congsuat, ht: ht.congsuat, unit: '%', type: 'congsuat' }
    ];
    
    const kpiGrid = document.getElementById('kpiGrid');
    kpiGrid.innerHTML = kpis.map(k => {
        const change = getChangeInfo(k.curr, k.prev);
        const formatted = formatValue(k.curr, k.type);
        const khFormatted = formatValue(k.kh, k.type, true);
        const htColor = getColorByPercent(k.ht);
        
        return `
            <div class="kpi-card">
                <div class="kpi-title">${k.title}</div>
                <div class="kpi-value">${formatted}<span style="font-size:0.6rem;"> ${k.unit}</span></div>
                <div class="kpi-compare">
                    <div>KH ${year}: ${khFormatted} ${k.unit}</div>
                    <div>So với KH: <span style="color:${htColor}; font-weight:bold;">${k.ht.toFixed(1)}%</span></div>
                    <div>${prevYear}: ${formatValue(k.prev, k.type)}
                    <span class="${change.colorClass}"> ${change.icon} ${change.percent}%</span></div>
                </div>
            </div>
        `;
    }).join('');
    
    // ==================== BẢNG DỮ LIỆU ====================
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');
    
    tableHeader.innerHTML = `<tr><th>Chỉ tiêu</th>${monthsShort.map(m => `<th>${m}</th>`).join('')}<th>Tổng/TB</th><th>KH năm</th><th>% HT</th></tr>`;
    
    // Thông tin số giường phía trên bảng
    let bedInfo = document.getElementById('bedInfo');
    if (!bedInfo) {
        bedInfo = document.createElement('div');
        bedInfo.id = 'bedInfo';
        bedInfo.style.cssText = 'text-align: right; font-size: 0.65rem; margin-bottom: 8px; padding: 4px 12px; background: #0a1a1a; border-radius: 20px; display: inline-block; float: right; color: #a0e0c0;';
        const tableSection = document.querySelector('.table-section');
        if (tableSection) tableSection.insertBefore(bedInfo, tableSection.firstChild);
    }
    bedInfo.innerHTML = `<i class="fas fa-bed"></i> Số giường KH: ${soGiuongKH[year]} giường | KH công suất: ${kh.congsuat}% | KH ngày ĐT TB: ${kh.ngaytb} ngày`;
    
    // Định nghĩa các chỉ tiêu trong bảng
    const metrics = [
        { 
            key: 'kham', 
            name: 'Tổng số khám bệnh (lượt)', 
            isPercent: false, 
            getData: () => monthlyData.kham[year],
            getTotal: () => sumIgnoreNull(monthlyData.kham[year]),
            getKh: () => keHoachNam.kham[year]
        },
        { 
            key: 'noitru', 
            name: 'Tổng số nội trú (lượt)', 
            isPercent: false, 
            getData: () => monthlyData.noitru[year],
            getTotal: () => sumIgnoreNull(monthlyData.noitru[year]),
            getKh: () => keHoachNam.noitru[year]
        },
        { 
            key: 'ngaydt', 
            name: 'Tổng số ngày điều trị (ngày)', 
            isPercent: false, 
            getData: () => monthlyData.ngaydt[year],
            getTotal: () => sumIgnoreNull(monthlyData.ngaydt[year]),
            getKh: () => keHoachNam.ngaydt[year]
        },
        { 
            key: 'ngaytb', 
            name: 'Ngày điều trị trung bình (ngày)', 
            isPercent: false, 
            isAvg: true,
            getData: () => getNgayDTTrungBinhTheoThang(year),
            getTotal: () => tinhNgayDTTrungBinhNam(year),
            getKh: () => keHoachNam.ngaytb[year]
        },
        { 
            key: 'congsuat', 
            name: 'Công suất sử dụng giường KH (%)', 
            isPercent: true, 
            isAvg: true,
            getData: () => getCongSuatTheoThang(year),
            getTotal: () => tinhCongSuatTrungBinhNam(year),
            getKh: () => keHoachNam.congsuat[year]
        }
    ];
    
    let rows = '';
    
    metrics.forEach(metric => {
        const data = metric.getData();
        const total = metric.getTotal();
        const validCount = countValid(data);
        const khValue = metric.getKh();
        const phanTram = tinhPhanTramHT(total, khValue);
        const htColor = getColorByPercent(phanTram);
        
        let displayValue;
        if (metric.isAvg || metric.isAvg === true) {
            displayValue = total.toFixed(1) + (metric.isPercent ? '%' : '');
        } else {
            displayValue = total.toLocaleString('vi-VN') + (metric.isPercent ? '%' : '');
        }
        
        rows += `<tr>
            <td style="text-align:left; font-weight:600;">${metric.name}</td>
            ${data.map(v => {
                if (v === null) return `<td style="color:#5a7a7a;">—</td>`;
                if (metric.isPercent) return `<td>${v.toFixed(1)}%</td>`;
                if (metric.key === 'ngaytb') return `<td>${v.toFixed(1)}</td>`;
                return `<td>${v.toLocaleString('vi-VN')}</td>`;
            }).join('')}
            <td class="year-col">${displayValue}${(metric.isAvg || metric.isAvg === true) && validCount < 12 ? ` <span style="font-size:0.6rem;">(/${validCount} th)</span>` : ''}</td>
            <td class="year-col">${(metric.isAvg || metric.isAvg === true) ? khValue.toFixed(1) + (metric.isPercent ? '%' : '') : khValue.toLocaleString('vi-VN') + (metric.isPercent ? '%' : '')}</td>
            <td class="year-col" style="color:${htColor};">${phanTram.toFixed(1)}%</td>
        </tr>`;
    });
    
    // Dòng so sánh năm trước (theo tab đang chọn)
    const compareNames = { kham: 'Khám bệnh', noitru: 'Nội trú', ngaydt: 'Ngày điều trị', ngaytb: 'Ngày ĐT TB', congsuat: 'Công suất' };
    let compareData, compareTotal;
    
    if (currentMetric === 'congsuat') {
        compareData = getCongSuatTheoThang(prevYear);
        compareTotal = tinhCongSuatTrungBinhNam(prevYear);
    } else if (currentMetric === 'ngaytb') {
        compareData = getNgayDTTrungBinhTheoThang(prevYear);
        compareTotal = tinhNgayDTTrungBinhNam(prevYear);
    } else {
        compareData = monthlyData[currentMetric][prevYear];
        compareTotal = sumIgnoreNull(compareData);
    }
    
    const compareDisplay = formatValue(compareTotal, currentMetric);
    
    rows += `<tr style="background:#0a1a1a; border-top:2px solid #2a6a6a;">
        <td style="text-align:left; font-weight:700; color:#50e0c0;">${prevYear} (So sánh ${compareNames[currentMetric]})</td>
        ${monthsShort.map((_, idx) => {
            let val = compareData ? compareData[idx] : null;
            if (val === null) return `<td style="color:#5a7a7a;">—</td>`;
            if (currentMetric === 'congsuat') val = val.toFixed(1) + '%';
            else if (currentMetric === 'ngaytb') val = val.toFixed(1);
            else val = val.toLocaleString('vi-VN');
            return `<td>${val}</td>`;
        }).join('')}
        <td class="year-col">${compareDisplay}</td>
        <td class="year-col">—</td>
        <td class="year-col">—</td>
    </tr>`;
    
    tableBody.innerHTML = rows;
    updateChart();
}

// ==================== CẬP NHẬT BIỂU ĐỒ ====================
function updateChart() {
    const ctx = document.getElementById('trendChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();
    
    let dataCurr, dataPrev;
    
    if (currentMetric === 'congsuat') {
        dataCurr = getCongSuatTheoThang(currentYear);
        dataPrev = getCongSuatTheoThang(compareYear);
    } else if (currentMetric === 'ngaytb') {
        dataCurr = getNgayDTTrungBinhTheoThang(currentYear);
        dataPrev = getNgayDTTrungBinhTheoThang(compareYear);
    } else {
        dataCurr = monthlyData[currentMetric][currentYear];
        dataPrev = monthlyData[currentMetric][compareYear];
    }
    
    dataCurr = dataCurr ? dataCurr.map(v => v === null ? NaN : v) : Array(12).fill(NaN);
    dataPrev = dataPrev ? dataPrev.map(v => v === null ? NaN : v) : Array(12).fill(NaN);
    
    const colors = { kham: '#2dd4bf', noitru: '#facc15', ngaydt: '#a78bfa', ngaytb: '#fb7185', congsuat: '#34d399' };
    const names = { kham: 'Khám bệnh', noitru: 'Nội trú', ngaydt: 'Ngày điều trị', ngaytb: 'Ngày ĐT TB', congsuat: 'Công suất' };
    
    const datasets = [
        {
            label: `${currentYear} - ${names[currentMetric]}`,
            data: dataCurr,
            borderColor: colors[currentMetric] || '#2dd4bf',
            borderWidth: 2.5,
            tension: 0.2,
            pointRadius: 3,
            pointBackgroundColor: colors[currentMetric],
            spanGaps: false
        },
        {
            label: `${compareYear} - ${names[currentMetric]}`,
            data: dataPrev,
            borderColor: '#facc15',
            borderWidth: 2,
            tension: 0.2,
            pointRadius: 3,
            borderDash: [5, 5],
            spanGaps: false
        }
    ];
    
    // Chỉ thêm đường kế hoạch cho tab Công suất
    if (currentMetric === 'congsuat') {
        const khValue = keHoachNam.congsuat?.[currentYear];
        if (khValue !== undefined && khValue !== null) {
            datasets.push({
                label: `KH ${currentYear} (mục tiêu)`,
                data: monthsFull.map(() => khValue),
                borderColor: '#fb7185',
                borderWidth: 2,
                borderDash: [10, 5],
                tension: 0,
                pointRadius: 0,
                fill: false
            });
        }
    }
    
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: { labels: monthsFull, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top', labels: { font: { size: 10 }, color: '#aaccc0', usePointStyle: true } },
                tooltip: {
                    backgroundColor: '#0a121a',
                    titleColor: '#e0e0e0',
                    bodyColor: '#aaccc0',
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw;
                            if (isNaN(value)) return label + ': —';
                            if (currentMetric === 'congsuat') return label + ': ' + value.toFixed(1) + '%';
                            if (currentMetric === 'ngaytb') return label + ': ' + value.toFixed(1);
                            return label + ': ' + value.toLocaleString('vi-VN');
                        }
                    }
                }
            },
            scales: {
                y: { grid: { color: '#2a3a4a' }, ticks: { font: { size: 9 }, color: '#aaccc0' } },
                x: { ticks: { font: { size: 9 }, color: '#aaccc0', rotation: -30, maxRotation: -30, autoSkip: true } }
            }
        }
    });
}

// ==================== KHỞI TẠO & EVENT LISTENERS ====================
document.getElementById('yearSelect').addEventListener('change', (e) => {
    currentYear = parseInt(e.target.value);
    compareYear = currentYear - 1;
    if (compareYear < 2021) compareYear = 2021;
    document.getElementById('compareYearLabel').innerText = compareYear;
    updateDashboard();
});

document.querySelectorAll('.chart-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentMetric = tab.dataset.metric;
        updateChart();
    });
});

document.getElementById('compareYearLabel').innerText = compareYear;
updateDashboard();