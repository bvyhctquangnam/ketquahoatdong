// ==================== DỮ LIỆU Y TẾ ====================
const monthlyData = {
    kham: {
        2021: [1167, 669, 1721, 1346, 687, 959, 800, 303, 228, 615, 429, 156],
        2022: [115, 203, 406, 435, 659, 749, 670, 642, 551, 564, 677, 489],
        2023: [199, 577, 714, 462, 604, 427, 251, 137, 144, 144, 96, 72],
        2024: [53, 83, 118, 80, 114, 108, 105, 123, 286, 344, 391, 373],
        2025: [152, 321, 388, 324, 379, 403, 428, 361, 386, 295, 331, 307],
        2026: [268, 110, 416, null, null, null, null, null, null, null, null, null]
    },
    noitru: {
        2021: [268, 139, 483, 597, 176, 152, 237, 42, 32, 132, 416, 313],
        2022: [20, 30, 122, 184, 200, 320, 383, 424, 230, 247, 287, 290],
        2023: [110, 120, 374, 406, 187, 298, 318, 207, 104, 114, 105, 121],
        2024: [57, 32, 121, 127, 78, 90, 102, 107, 133, 208, 293, 270],
        2025: [162, 109, 290, 347, 231, 274, 350, 407, 224, 357, 222, 325],
        2026: [146, 108, 228, null, null, null, null, null, null, null, null, null]
    },
    ngaydt: {
        2021: [4759, 1859, 7076, 9494, 2587, 2262, 3769, 353, 417, 1368, 5395, 4324],
        2022: [174, 289, 1818, 2591, 3071, 5460, 6923, 6994, 3454, 4276, 4800, 5378],
        2023: [1866, 1721, 6963, 7610, 2756, 5658, 5323, 3470, 1783, 2174, 2274, 2707],
        2024: [1140, 539, 2126, 2068, 1150, 1570, 1754, 1745, 2298, 4271, 4879, 3923],
        2025: [2172, 1391, 4679, 5288, 3560, 4217, 5546, 6008, 3552, 5779, 3331, 4962],
        2026: [2079, 1481, 3334, null, null, null, null, null, null, null, null, null]
    },
    bhyt_count: {
        2021: [1156, 661, 1713, 1334, 680, 948, 795, 257, 221, 453, 429, 156],
        2022: [113, 201, 396, 422, 646, 743, 667, 639, 550, 561, 676, 488],
        2023: [197, 564, 711, 458, 598, 426, 251, 135, 144, 142, 95, 72],
        2024: [53, 83, 118, 80, 114, 107, 105, 123, 286, 343, 390, 366],
        2025: [150, 315, 384, 322, 377, 403, 424, 356, 386, 294, 329, 306],
        2026: [267, 108, 416, null, null, null, null, null, null, null, null, null]
    },
    ngoaitru: {
        2021: [312, 178, 456, 358, 182, 255, 213, 81, 61, 164, 114, 42],
        2022: [31, 54, 108, 116, 176, 200, 179, 171, 147, 151, 181, 131],
        2023: [53, 154, 190, 123, 161, 114, 67, 37, 38, 38, 26, 19],
        2024: [14, 22, 31, 21, 30, 29, 28, 33, 76, 92, 104, 99],
        2025: [41, 86, 104, 87, 101, 108, 114, 96, 103, 79, 88, 82],
        2026: [67, 32, 56, null, null, null, null, null, null, null, null, null]
    },
    dieutri_ngoaitru: {
        2021: [null, null, null, null, null, null, null, null, null, null, null, null],
        2022: [null, null, null, null, null, null, null, null, null, null, null, null],
        2023: [null, null, null, null, null, null, null, null, null, null, null, null],
        2024: [null, null, null, null, null, null, null, null, null, null, null, null],
        2025: [null, null, null, null, null, null, null, null, null, null, null, null],
        2026: [null, null, null, null, null, null, null, null, null, null, null, null]
    },
    noitru_banngay: {
        2021: [null, null, null, null, null, null, null, null, null, null, null, null],
        2022: [null, null, null, null, null, null, null, null, null, null, null, null],
        2023: [null, null, null, null, null, null, null, null, null, null, null, null],
        2024: [null, null, null, null, null, null, 6, 8, 4, 4, 35, 61],
        2025: [44, 33, 83, 82, 63, 73, 100, 118, 66, 106, 67, 94],
        2026: [53, 31, 63, null, null, null, null, null, null, null, null, null]
    },
    noitru_24h: {
        2021: [268, 139, 483, 597, 176, 152, 237, 42, 32, 132, 416, 313],
        2022: [20, 30, 122, 184, 200, 320, 383, 424, 230, 247, 287, 290],
        2023: [110, 120, 374, 406, 187, 298, 318, 207, 104, 114, 105, 121],
        2024: [57, 32, 121, 127, 78, 90, 96, 99, 129, 204, 258, 209],
        2025: [118, 76, 207, 265, 168, 201, 250, 289, 158, 251, 155, 231],
        2026: [93, 77, 165, null, null, null, null, null, null, null, null, null]
    },
    chuyenden: {
        2021: [759, 415, 991, 951, 480, 704, 629, 249, 204, 379, 0, 0],
        2022: [95, 119, 279, 299, 379, 356, 361, 331, 246, 282, 379, 302],
        2023: [149, 235, 347, 236, 261, 126, 15, 13, 9, 5, 1, 4],
        2024: [0, 3, 10, 3, 4, 2, 0, 17, 73, 114, 156, 119],
        2025: [72, 59, 91, 95, 88, 44, 77, 67, 56, 41, 67, 72],
        2026: [68, 33, 63, null, null, null, null, null, null, null, null, null]
    },
    chuyendi: {
        2021: [10, 5, 14, 2, 5, 11, 1, 19, 5, 1, 0, 0],
        2022: [1, 4, 2, 3, 2, 2, 6, 4, 3, 3, 1, 3],
        2023: [1, 3, 3, 4, 0, 2, 2, 1, 3, 2, 1, 0],
        2024: [0, 2, 2, 1, 0, 1, 0, 1, 1, 5, 4, 1],
        2025: [1, 1, 2, 1, 0, 1, 1, 2, 1, 2, 0, 1],
        2026: [0, 1, 1, null, null, null, null, null, null, null, null, null]
    }
};

const bedData = {
    noitru: {
        2021: { tong: 190, khoa: { Nội: 47, Ngoại: 29, Lão: 47, Châmcứu: 29, PHCN: 38 } },
        2022: { tong: 190, khoa: { Nội: 47, Ngoại: 29, Lão: 47, Châmcứu: 29, PHCN: 38 } },
        2023: { tong: 190, khoa: { Nội: 47, Ngoại: 29, Lão: 47, Châmcứu: 29, PHCN: 38 } },
        2024: { tong: 138, khoa: { Nội: 37, Ngoại: 20, Lão: 32, Châmcứu: 22, PHCN: 27 } },
        2025: { tong: 118, khoa: { Nội: 32, Ngoại: 17, Lão: 27, Châmcứu: 19, PHCN: 23 } },
        2026: { tong: 123, khoa: { Nội: 32, Ngoại: 17, Lão: 32, Châmcứu: 19, PHCN: 23 } }
    },
    banngay: {
        2021: { tong: 0, khoa: { Nội: 0, Ngoại: 0, Lão: 0, Châmcứu: 0, PHCN: 0 } },
        2022: { tong: 0, khoa: { Nội: 0, Ngoại: 0, Lão: 0, Châmcứu: 0, PHCN: 0 } },
        2023: { tong: 0, khoa: { Nội: 0, Ngoại: 0, Lão: 0, Châmcứu: 0, PHCN: 0 } },
        2024: { tong: 32, khoa: { Nội: 5, Ngoại: 6, Lão: 10, Châmcứu: 4, PHCN: 7 } },
        2025: { tong: 32, khoa: { Nội: 5, Ngoại: 6, Lão: 10, Châmcứu: 4, PHCN: 7 } },
        2026: { tong: 27, khoa: { Nội: 5, Ngoại: 6, Lão: 5, Châmcứu: 4, PHCN: 7 } }
    }
};

const soGiuongKH = { 2021: 190, 2022: 190, 2023: 190, 2024: 170, 2025: 150, 2026: 150 };

const keHoachNam = {
    kham: { 2021: 14037, 2022: 14037, 2023: 22027, 2024: 4400, 2025: 2396, 2026: 3590 },
    noitru: { 2021: 4037, 2022: 3853, 2023: 3777, 2024: 2860, 2025: 1780, 2026: 2890 },
    ngaydt: { 2021: 70953, 2022: 69350, 2023: 62415, 2024: 62050, 2025: 30209, 2026: 52013 },
    ngaytb: { 2021: 17.6, 2022: 18.0, 2023: 16.5, 2024: 21.7, 2025: 17.0, 2026: 18.0 },
    congsuat: { 2021: 100, 2022: 100, 2023: 100, 2024: 100, 2025: 100, 2026: 100 },
    bhyt_rate: { 2021: 100, 2022: 100, 2023: 100, 2024: 100, 2025: 100, 2026: 100 }
};

const monthsShort = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
const monthsFull = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
const soNgayTrongThang = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let currentYear = 2026;
let compareYear = 2025;
let currentMetric = 'kham';
let chartInstance = null;
let pieChartInstance = null;
let barChartInstance = null;

function isNamNhuan(nam) {
    return (nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0);
}

function sumIgnoreNull(arr) {
    if (!arr) return 0;
    return arr.filter(v => v !== null).reduce((a, b) => a + b, 0);
}

function avgIgnoreNull(arr) {
    if (!arr) return 0;
    const valid = arr.filter(v => v !== null);
    if (valid.length === 0) return 0;
    return valid.reduce((a, b) => a + b, 0) / valid.length;
}

function countValid(arr) {
    return arr ? arr.filter(v => v !== null).length : 0;
}

function formatValue(value, metric, isKh = false) {
    if (value === null || value === undefined) return '—';
    if (metric === 'congsuat') return value.toFixed(1) + '%';
    if (metric === 'ngaytb') return value.toFixed(1);
    if (metric === 'bhyt_rate') return value.toFixed(1) + '%';
    return value.toLocaleString('vi-VN');
}

function getSoThangCoDuLieu(nam, metricKey) {
    const data = monthlyData[metricKey]?.[nam];
    if (!data) return 0;
    return data.filter(v => v !== null).length;
}

function tinhTongSoSanh(namHienTai, namSoSanh, metricKey) {
    const dataHienTai = monthlyData[metricKey]?.[namHienTai];
    const dataSoSanh = monthlyData[metricKey]?.[namSoSanh];
    if (!dataHienTai || !dataSoSanh) return 0;
    const soThangHienTai = countValid(dataHienTai);
    if (soThangHienTai < 12 && soThangHienTai > 0) {
        let count = 0, sum = 0;
        for (let i = 0; i < dataSoSanh.length && count < soThangHienTai; i++) {
            if (dataSoSanh[i] !== null) { sum += dataSoSanh[i]; count++; }
        }
        return sum;
    }
    return sumIgnoreNull(dataSoSanh);
}

function tinhTrungBinhSoSanh(namHienTai, namSoSanh, metricKey) {
    if (metricKey === 'congsuat') {
        const ngaydtHienTai = monthlyData.ngaydt[namHienTai];
        const ngaydtSoSanh = monthlyData.ngaydt[namSoSanh];
        if (!ngaydtHienTai || !ngaydtSoSanh) return 0;
        const soThangHienTai = countValid(ngaydtHienTai);
        const soGiuong = soGiuongKH[namSoSanh];
        if (soThangHienTai < 12 && soThangHienTai > 0) {
            let tongNgaydt = 0, tongNgayTrongThang = 0, count = 0;
            for (let i = 0; i < ngaydtSoSanh.length && count < soThangHienTai; i++) {
                if (ngaydtSoSanh[i] !== null) {
                    tongNgaydt += ngaydtSoSanh[i];
                    let ngayTrongThang = soNgayTrongThang[i];
                    if (i === 1 && isNamNhuan(namSoSanh)) ngayTrongThang = 29;
                    tongNgayTrongThang += ngayTrongThang;
                    count++;
                }
            }
            return tongNgayTrongThang === 0 || soGiuong === 0 ? 0 : (tongNgaydt / (soGiuong * tongNgayTrongThang)) * 100;
        }
        return (sumIgnoreNull(ngaydtSoSanh) / (soGiuong * 365)) * 100;
    }
    if (metricKey === 'ngaytb') {
        const ngaydtHienTai = monthlyData.ngaydt[namHienTai];
        const noitruHienTai = monthlyData.noitru[namHienTai];
        const ngaydtSoSanh = monthlyData.ngaydt[namSoSanh];
        const noitruSoSanh = monthlyData.noitru[namSoSanh];
        if (!ngaydtHienTai || !noitruHienTai || !ngaydtSoSanh || !noitruSoSanh) return 0;
        const soThangHienTai = countValid(ngaydtHienTai);
        if (soThangHienTai < 12 && soThangHienTai > 0) {
            let tongNgaydt = 0, tongNoitru = 0, count = 0;
            for (let i = 0; i < ngaydtSoSanh.length && count < soThangHienTai; i++) {
                if (ngaydtSoSanh[i] !== null && noitruSoSanh[i] !== null) {
                    tongNgaydt += ngaydtSoSanh[i];
                    tongNoitru += noitruSoSanh[i];
                    count++;
                }
            }
            return tongNoitru > 0 ? tongNgaydt / tongNoitru : 0;
        }
        let tongNgaydt = 0, tongNoitru = 0;
        for (let i = 0; i < 12; i++) {
            if (ngaydtSoSanh[i] !== null && noitruSoSanh[i] !== null) {
                tongNgaydt += ngaydtSoSanh[i];
                tongNoitru += noitruSoSanh[i];
            }
        }
        return tongNoitru > 0 ? tongNgaydt / tongNoitru : 0;
    }
    if (metricKey === 'bhyt_rate') {
        const bhytHienTai = monthlyData.bhyt_count?.[namHienTai];
        const khamHienTai = monthlyData.kham?.[namHienTai];
        const bhytSoSanh = monthlyData.bhyt_count?.[namSoSanh];
        const khamSoSanh = monthlyData.kham?.[namSoSanh];
        if (!bhytHienTai || !khamHienTai || !bhytSoSanh || !khamSoSanh) return 0;
        const soThangHienTai = countValid(bhytHienTai);
        if (soThangHienTai < 12 && soThangHienTai > 0) {
            let sumBhyt = 0, sumKham = 0, count = 0;
            for (let i = 0; i < bhytSoSanh.length && count < soThangHienTai; i++) {
                if (bhytSoSanh[i] !== null && khamSoSanh[i] !== null && khamSoSanh[i] > 0) {
                    sumBhyt += bhytSoSanh[i];
                    sumKham += khamSoSanh[i];
                    count++;
                }
            }
            return sumKham > 0 ? (sumBhyt / sumKham) * 100 : 0;
        }
        let sumBhyt = 0, sumKham = 0;
        for (let i = 0; i < 12; i++) {
            if (bhytSoSanh[i] !== null && khamSoSanh[i] !== null && khamSoSanh[i] > 0) {
                sumBhyt += bhytSoSanh[i];
                sumKham += khamSoSanh[i];
            }
        }
        return sumKham > 0 ? (sumBhyt / sumKham) * 100 : 0;
    }
    if (metricKey === 'noitru_banngay') {
        return tinhTongSoSanh(namHienTai, namSoSanh, 'noitru_banngay');
    }
    if (metricKey === 'chuyenden') {
        return tinhTongSoSanh(namHienTai, namSoSanh, 'chuyenden');
    }
    if (metricKey === 'chuyendi') {
        return tinhTongSoSanh(namHienTai, namSoSanh, 'chuyendi');
    }
    if (metricKey === 'dieutri_ngoaitru') {
        return tinhTongSoSanh(namHienTai, namSoSanh, 'dieutri_ngoaitru');
    }
    return tinhTongSoSanh(namHienTai, namSoSanh, metricKey);
}

function tinhTyLeBhytNam(nam) {
    const bhytData = monthlyData.bhyt_count[nam];
    const khamData = monthlyData.kham[nam];
    if (!bhytData || !khamData) return 0;
    let sumBhyt = 0, sumKham = 0;
    for (let i = 0; i < 12; i++) {
        if (bhytData[i] !== null && khamData[i] !== null && khamData[i] > 0) {
            sumBhyt += bhytData[i];
            sumKham += khamData[i];
        }
    }
    return sumKham > 0 ? (sumBhyt / sumKham) * 100 : 0;
}

function getTyLeBhytTheoThang(nam) {
    const result = [];
    const bhytData = monthlyData.bhyt_count[nam];
    const khamData = monthlyData.kham[nam];
    if (!bhytData || !khamData) return Array(12).fill(null);
    for (let i = 0; i < 12; i++) {
        if (bhytData[i] !== null && khamData[i] !== null && khamData[i] > 0) {
            result.push((bhytData[i] / khamData[i]) * 100);
        } else {
            result.push(null);
        }
    }
    return result;
}

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
    let tongNgaydt = 0, tongNoitru = 0;
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
    for (let i = 0; i < 12; i++) result.push(tinhNgayDTTrungBinhThang(nam, i));
    return result;
}

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
    let tongNgaydt = 0, tongNgayTrongThang = 0;
    const soGiuong = soGiuongKH[nam];
    const soThangCoDuLieu = countValid(ngaydt);
    for (let i = 0; i < 12; i++) {
        if (ngaydt[i] !== null) {
            tongNgaydt += ngaydt[i];
            let ngayTrongThang = soNgayTrongThang[i];
            if (i === 1 && isNamNhuan(nam)) ngayTrongThang = 29;
            tongNgayTrongThang += ngayTrongThang;
        }
    }
    if (tongNgayTrongThang === 0 || soGiuong === 0) return 0;
    if (soThangCoDuLieu === 12) return (tongNgaydt / (soGiuong * 365)) * 100;
    return (tongNgaydt / (soGiuong * tongNgayTrongThang)) * 100;
}

function getCongSuatTheoThang(nam) {
    const result = [];
    for (let i = 0; i < 12; i++) result.push(tinhCongSuatThang(nam, i));
    return result;
}

function tinhPhanTramHT(actual, kh) {
    if (!kh || kh === 0) return 0;
    return (actual / kh) * 100;
}

function getChangeInfo(curr, prev) {
    if (prev === 0) return { percent: 0, icon: '→', colorClass: '' };
    const percent = ((curr - prev) / prev * 100).toFixed(1);
    const isUp = curr > prev;
    return { percent: Math.abs(percent), icon: isUp ? '↑' : '↓', colorClass: isUp ? 'trend-up' : 'trend-down' };
}

function getColorByPercent(percent) {
    if (percent >= 100) return '#2dd4bf';
    if (percent >= 90) return '#facc15';
    return '#fb7185';
}

function getMetricDataByYear(metric, year) {
    if (metric === 'congsuat') {
        return getCongSuatTheoThang(year);
    } else if (metric === 'ngaytb') {
        return getNgayDTTrungBinhTheoThang(year);
    } else if (metric === 'bhyt_rate') {
        return getTyLeBhytTheoThang(year);
    } else {
        return monthlyData[metric]?.[year];
    }
}

function getMetricTotalByYear(metric, year) {
    if (metric === 'congsuat') {
        return tinhCongSuatTrungBinhNam(year);
    } else if (metric === 'ngaytb') {
        return tinhNgayDTTrungBinhNam(year);
    } else if (metric === 'bhyt_rate') {
        return tinhTyLeBhytNam(year);
    } else {
        return sumIgnoreNull(monthlyData[metric]?.[year]);
    }
}

function updateBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    if (barChartInstance) barChartInstance.destroy();
    
    const yearCurr = currentYear;
    const yearPrev = compareYear;
    
    let dataCurr = getMetricDataByYear(currentMetric, yearCurr);
    let dataPrev = getMetricDataByYear(currentMetric, yearPrev);
    
    const soThangCurr = dataCurr ? dataCurr.filter(v => v !== null).length : 0;
    
    dataCurr = dataCurr ? dataCurr.map(v => v === null ? 0 : v) : Array(12).fill(0);
    dataPrev = dataPrev ? dataPrev.map(v => v === null ? 0 : v) : Array(12).fill(0);
    
    let totalCurr = 0, totalPrev = 0;
    let countValidMonths = 0;
    for (let i = 0; i < 12 && countValidMonths < soThangCurr; i++) {
        if (dataCurr[i] !== 0) {
            totalCurr += dataCurr[i];
            totalPrev += dataPrev[i];
            countValidMonths++;
        }
    }
    
    const percentChange = totalPrev > 0 ? ((totalCurr - totalPrev) / totalPrev * 100).toFixed(1) : 0;
    const changeIcon = totalCurr > totalPrev ? '↑' : (totalCurr < totalPrev ? '↓' : '→');
    const changeColor = totalCurr > totalPrev ? '#2dd4bf' : (totalCurr < totalPrev ? '#fb7185' : '#facc15');
    
    const names = { kham: 'Khám bệnh', noitru: 'Nội trú', ngaydt: 'Ngày điều trị', ngaytb: 'Ngày ĐT TB', congsuat: 'Công suất', bhyt_rate: 'Tỷ lệ BHYT', noitru_banngay: 'Điều trị ban ngày', chuyenden: 'Chuyển đến', chuyendi: 'Chuyển đi', dieutri_ngoaitru: 'Điều trị ngoại trú' };
    
    document.getElementById('barCompareYear').innerText = yearPrev;
    document.getElementById('barCurrentYear').innerText = yearCurr;
    
    const kyText = soThangCurr < 12 ? `(cùng kỳ ${soThangCurr} tháng)` : '';
    document.getElementById('barChartTitle').innerHTML = `${names[currentMetric]} ${kyText} <span style="font-size:0.67rem; color:${changeColor};"> ${changeIcon} ${Math.abs(percentChange)}%</span>`;
    
    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monthsShort,
            datasets: [
                {
                    label: `${yearCurr} (${soThangCurr} tháng)`,
                    data: dataCurr,
                    backgroundColor: '#2dd4bf',
                    borderRadius: 4,
                    barPercentage: 0.7,
                    categoryPercentage: 0.85
                },
                {
                    label: `${yearPrev} (cùng kỳ ${soThangCurr} tháng)`,
                    data: dataPrev.map((v, i) => i < soThangCurr ? v : 0),
                    backgroundColor: '#facc15',
                    borderRadius: 4,
                    barPercentage: 0.7,
                    categoryPercentage: 0.85
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { 
                    position: 'top', 
                    labels: { font: { size: 9 }, color: '#aaccc0', usePointStyle: true, boxWidth: 8, padding: 6 }
                },
                tooltip: {
                    backgroundColor: '#0a121a',
                    titleColor: '#e0e0e0',
                    bodyColor: '#aaccc0',
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            let value = context.raw;
                            if (value === 0 && context.dataIndex >= soThangCurr) return label + ': —';
                            if (currentMetric === 'congsuat') return label + ': ' + value.toFixed(1) + '%';
                            if (currentMetric === 'ngaytb') return label + ': ' + value.toFixed(1);
                            if (currentMetric === 'bhyt_rate') return label + ': ' + value.toFixed(1) + '%';
                            return label + ': ' + value.toLocaleString('vi-VN');
                        }
                    }
                }
            },
            scales: {
                y: { 
                    grid: { color: '#2a3a4a' }, 
                    ticks: { font: { size: 8 }, color: '#aaccc0' }
                },
                x: { 
                    ticks: { font: { size: 8 }, color: '#aaccc0', rotation: -45, maxRotation: -45, autoSkip: true }
                }
            },
            layout: {
                padding: { top: 5, bottom: 5 }
            }
        }
    });
}

function updateBedTable() {
    const year = currentYear;
    const noitruData = bedData.noitru[year];
    const banngayData = bedData.banngay[year];
    
    document.getElementById('bedYear').innerText = year;
    
    const khoas = Object.keys(noitruData.khoa);
    
    const noitruTable = document.getElementById('noitruBedTable');
    noitruTable.innerHTML = khoas.map(khoa => `
        <tr>
            <td>Khoa ${khoa}</td>
            <td>${noitruData.khoa[khoa]}</td>
        </tr>
    `).join('');
    document.getElementById('noitruTotalBed').innerHTML = `Tổng: ${noitruData.tong} giường`;
    
    const banngayTable = document.getElementById('banngayBedTable');
    banngayTable.innerHTML = khoas.map(khoa => `
        <tr>
            <td>Khoa ${khoa}</td>
            <td>${banngayData.khoa[khoa]}</td>
        </tr>
    `).join('');
    document.getElementById('banngayTotalBed').innerHTML = `Tổng: ${banngayData.tong} giường`;
    
    const tongTable = document.getElementById('tongBedTable');
    let tongTatCa = 0;
    tongTable.innerHTML = khoas.map(khoa => {
        const tongKhoa = noitruData.khoa[khoa] + banngayData.khoa[khoa];
        tongTatCa += tongKhoa;
        return `<tr>
            <td>Khoa ${khoa}</td>
            <td>${tongKhoa}</td>
        </tr>`;
    }).join('');
    document.getElementById('tongTotalBed').innerHTML = `Tổng: ${tongTatCa} giường`;
}

function updatePieChart() {
    const year = currentYear;
    const tongBhyt = sumIgnoreNull(monthlyData.bhyt_count[year]);
    const tongKham = sumIgnoreNull(monthlyData.kham[year]);
    const tongVienPhi = tongKham - tongBhyt;
    
    const tyLeBhyt = tongKham > 0 ? (tongBhyt / tongKham) * 100 : 0;
    const tyLeVp = Math.max(0, 100 - tyLeBhyt);
    
    document.getElementById('pieYear').innerText = year;
    document.getElementById('pieBhyt').innerHTML = `${tongBhyt.toLocaleString('vi-VN')} thẻ <span style="font-size:0.7rem; opacity:0.9;">(${tyLeBhyt.toFixed(1)}%)</span>`;
    document.getElementById('pieVp').innerHTML = `${tongVienPhi.toLocaleString('vi-VN')} lượt <span style="font-size:0.7rem; opacity:0.9;">(${tyLeVp.toFixed(1)}%)</span>`;
    
    const ctx = document.getElementById('pieChart').getContext('2d');
    if (pieChartInstance) pieChartInstance.destroy();
    
    pieChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['BHYT', 'Viện phí'],
            datasets: [{
                data: [tyLeBhyt, tyLeVp],
                backgroundColor: ['#2dd4bf', '#facc15'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '55%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw;
                            let absoluteValue = label === 'BHYT' ? tongBhyt : tongVienPhi;
                            return `${label}: ${absoluteValue.toLocaleString('vi-VN')} (${value.toFixed(1)}%)`;
                        }
                    }
                }
            }
        }
    });
}

function updateDashboard() {
    const year = currentYear;
    const prevYear = compareYear;

    updateReportMonths();
    updateBedTable();
    
    const tongKham = sumIgnoreNull(monthlyData.kham[year]);
    const tongNoitru = sumIgnoreNull(monthlyData.noitru[year]);
    const tongNgaydt = sumIgnoreNull(monthlyData.ngaydt[year]);
    const tbNgaydt = tinhNgayDTTrungBinhNam(year);
    const tbCongsuat = tinhCongSuatTrungBinhNam(year);
    const tongBhyt = sumIgnoreNull(monthlyData.bhyt_count[year]);
    const tbBhytRate = tinhTyLeBhytNam(year);
    const tongVaoVien = tongKham - sumIgnoreNull(monthlyData.ngoaitru[year]);
    
    const tongKhamPrev = tinhTongSoSanh(year, prevYear, 'kham');
    const tongNoitruPrev = tinhTongSoSanh(year, prevYear, 'noitru');
    const tongNgaydtPrev = tinhTongSoSanh(year, prevYear, 'ngaydt');
    const tbNgaydtPrev = tinhTrungBinhSoSanh(year, prevYear, 'ngaytb');
    const tbCongsuatPrev = tinhTrungBinhSoSanh(year, prevYear, 'congsuat');
    const tongBhytPrev = tinhTongSoSanh(year, prevYear, 'bhyt_count');
    const tbBhytRatePrev = tinhTrungBinhSoSanh(year, prevYear, 'bhyt_rate');
    const tongVaoVienPrev = tinhTongSoSanh(year, prevYear, 'kham') - tinhTongSoSanh(year, prevYear, 'ngoaitru');
    
    const kh = {
        kham: keHoachNam.kham[year],
        noitru: keHoachNam.noitru[year],
        ngaydt: keHoachNam.ngaydt[year],
        ngaytb: keHoachNam.ngaytb[year],
        congsuat: keHoachNam.congsuat[year],
        bhyt_rate: keHoachNam.bhyt_rate[year]
    };
    
    const ht = {
        kham: tinhPhanTramHT(tongKham, kh.kham),
        noitru: tinhPhanTramHT(tongNoitru, kh.noitru),
        ngaydt: tinhPhanTramHT(tongNgaydt, kh.ngaydt),
        ngaytb: tinhPhanTramHT(tbNgaydt, kh.ngaytb),
        congsuat: tinhPhanTramHT(tbCongsuat, kh.congsuat),
        bhyt_rate: tinhPhanTramHT(tbBhytRate, kh.bhyt_rate)
    };
    
    const kpis = [
        { title: 'Tổng lượt khám bệnh', curr: tongKham, prev: tongKhamPrev, kh: kh.kham, ht: ht.kham, unit: 'lượt', type: 'kham' },
        { title: 'Tổng lượt nội trú', curr: tongNoitru, prev: tongNoitruPrev, kh: kh.noitru, ht: ht.noitru, unit: 'lượt', type: 'noitru' },
        { title: 'Tổng ngày điều trị', curr: tongNgaydt, prev: tongNgaydtPrev, kh: kh.ngaydt, ht: ht.ngaydt, unit: 'ngày', type: 'ngaydt' },
        { title: 'Ngày điều trị trung bình', curr: tbNgaydt, prev: tbNgaydtPrev, kh: kh.ngaytb, ht: ht.ngaytb, unit: 'ngày', type: 'ngaytb' },
        { title: 'Công suất giường kế hoạch', curr: tbCongsuat, prev: tbCongsuatPrev, kh: kh.congsuat, ht: ht.congsuat, unit: '', type: 'congsuat' },
        { title: 'Số thẻ KCB BHYT', curr: tongBhyt, prev: tongBhytPrev, kh: null, ht: null, unit: 'thẻ', type: 'bhyt_count' },
        { title: 'Tổng lượt vào viện', curr: tongVaoVien, prev: tongVaoVienPrev, kh: null, ht: null, unit: 'lượt', type: 'kham' }
    ];
    
    const kpiGrid = document.getElementById('kpiGrid');
    kpiGrid.innerHTML = kpis.map(k => {
        const change = k.prev !== null ? getChangeInfo(k.curr, k.prev) : { percent: 0, icon: '→', colorClass: '' };
        const formatted = formatValue(k.curr, k.type);
        const displayUnit = k.unit ? `<span style="font-size:0.55rem;"> ${k.unit}</span>` : '';
        const khFormatted = k.kh !== null ? formatValue(k.kh, k.type, true) : '—';
        const htColor = k.ht !== null ? getColorByPercent(k.ht) : '#7a9aa8';
        const soThangHienTai = getSoThangCoDuLieu(year, k.type === 'bhyt_count' ? 'bhyt_count' : 'kham');
        const kyText = (soThangHienTai < 12 && soThangHienTai > 0 && k.prev !== null) ? ` (cùng kỳ ${soThangHienTai} tháng)` : '';
        const bhytRateLine = (k.type === 'bhyt_count' && tbBhytRate > 0) ? `<div>Tỷ lệ BHYT: <span style="color:#f97316; font-weight:bold;">${tbBhytRate.toFixed(1)}%</span></div>` : '';
        
        let khDisplay = '';
        if (k.kh !== null) {
            let khValueFormatted = formatValue(k.kh, k.type);
            let khUnit = k.unit;
            if (k.type === 'congsuat' || k.type === 'bhyt_rate') {
                khUnit = '';
            }
            khDisplay = `<div>KH ${year}: ${khValueFormatted} ${khUnit}</div>`;
        }
        
        return `
            <div class="kpi-card">
                <div class="kpi-title">${k.title}</div>
                <div class="kpi-value">${formatted}${displayUnit}</div>
                <div class="kpi-compare">
                    ${khDisplay}
                    ${k.ht !== null ? `<div>So với KH: <span style="color:${htColor}; font-weight:bold;">${k.ht.toFixed(1)}%</span></div>` : ''}
                    ${bhytRateLine}
                    ${k.prev !== null ? `<div>${prevYear}${kyText}: ${formatValue(k.prev, k.type)} <span class="${change.colorClass}"> ${change.icon} ${Math.abs(change.percent)}%</span></div>` : '<div style="color:#5a7a7a;">Chỉ tiêu theo dõi</div>'}
                </div>
            </div>
        `;
    }).join('');
    
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');
    
    tableHeader.innerHTML = `<tr><th>Chỉ tiêu</th>${monthsShort.map(m => `<th>${m}</th>`).join('')}<th>Tổng/TB</th><th>KH năm</th><th>% HT</th></tr>`;
    
    const metrics = [
        { key: 'kham', name: 'Tổng số khám bệnh (lượt)', isPercent: false, getData: () => monthlyData.kham[year], getTotal: () => sumIgnoreNull(monthlyData.kham[year]), getKh: () => keHoachNam.kham[year], rowType: 'white' },
        { key: 'noitru', name: 'Tổng số nội trú (lượt)', isPercent: false, getData: () => monthlyData.noitru[year], getTotal: () => sumIgnoreNull(monthlyData.noitru[year]), getKh: () => keHoachNam.noitru[year], rowType: 'white' },
        { key: 'ngaydt', name: 'Tổng số ngày điều trị (ngày)', isPercent: false, getData: () => monthlyData.ngaydt[year], getTotal: () => sumIgnoreNull(monthlyData.ngaydt[year]), getKh: () => keHoachNam.ngaydt[year], rowType: 'white' },
        { key: 'ngaytb', name: 'Ngày điều trị trung bình (ngày)', isPercent: false, isAvg: true, getData: () => getNgayDTTrungBinhTheoThang(year), getTotal: () => tinhNgayDTTrungBinhNam(year), getKh: () => keHoachNam.ngaytb[year], rowType: 'white' },
        { key: 'congsuat', name: 'Công suất sử dụng giường KH (%)', isPercent: true, isAvg: true, getData: () => getCongSuatTheoThang(year), getTotal: () => tinhCongSuatTrungBinhNam(year), getKh: () => keHoachNam.congsuat[year], rowType: 'white' },
        { key: 'bhyt_count', name: 'Số thẻ BHYT (thẻ)', isPercent: false, getData: () => monthlyData.bhyt_count[year], getTotal: () => sumIgnoreNull(monthlyData.bhyt_count[year]), getKh: () => null, rowType: 'yellow' },
        { key: 'bhyt_rate', name: 'Tỷ lệ BHYT (%)', isPercent: true, isAvg: true, getData: () => getTyLeBhytTheoThang(year), getTotal: () => tinhTyLeBhytNam(year), getKh: () => keHoachNam.bhyt_rate[year], rowType: 'yellow' },
        { key: 'ngoaitru', name: 'KCB ngoại trú (lượt)', isPercent: false, getData: () => monthlyData.ngoaitru[year], getTotal: () => sumIgnoreNull(monthlyData.ngoaitru[year]), getKh: () => null, rowType: 'yellow' },
        { key: 'dieutri_ngoaitru', name: 'Điều trị ngoại trú (lượt)', isPercent: false, getData: () => monthlyData.dieutri_ngoaitru[year], getTotal: () => sumIgnoreNull(monthlyData.dieutri_ngoaitru[year]), getKh: () => null, rowType: 'yellow' },
        { key: 'noitru_banngay', name: 'Điều trị ban ngày <24h (lượt)', isPercent: false, getData: () => monthlyData.noitru_banngay[year], getTotal: () => sumIgnoreNull(monthlyData.noitru_banngay[year]), getKh: () => null, rowType: 'yellow' },
        { key: 'noitru_24h', name: 'Điều trị nội trú 24/24h (lượt)', isPercent: false, getData: () => monthlyData.noitru_24h[year], getTotal: () => sumIgnoreNull(monthlyData.noitru_24h[year]), getKh: () => null, rowType: 'yellow' },
        { key: 'chuyenden', name: 'Chuyển đến (lượt)', isPercent: false, getData: () => monthlyData.chuyenden[year], getTotal: () => sumIgnoreNull(monthlyData.chuyenden[year]), getKh: () => null, rowType: 'yellow' },
        { key: 'chuyendi', name: 'Chuyển đi (lượt)', isPercent: false, getData: () => monthlyData.chuyendi[year], getTotal: () => sumIgnoreNull(monthlyData.chuyendi[year]), getKh: () => null, rowType: 'yellow' }
    ];
    
    let rows = '';
    metrics.forEach(metric => {
        const data = metric.getData();
        const total = metric.getTotal();
        const validCount = countValid(data);
        const khValue = metric.getKh();
        const phanTram = khValue ? tinhPhanTramHT(total, khValue) : null;
        const htColor = phanTram !== null ? getColorByPercent(phanTram) : '#7a9aa8';
        let displayValue;
        if (metric.isAvg === true) displayValue = total.toFixed(1) + (metric.isPercent ? '%' : '');
        else displayValue = total.toLocaleString('vi-VN') + (metric.isPercent ? '%' : '');
        
        const textColor = metric.rowType === 'yellow' ? '#facc15' : '#eef5ff';
        const bgColor = metric.rowType === 'yellow' ? 'rgba(250, 204, 21, 0.08)' : 'transparent';
        
        rows += `<tr style="background:${bgColor};">
            <td style="text-align:left; font-weight:600; color:${textColor};">${metric.name}</td>
            ${data.map(v => {
                if (v === null) return `<td style="color:#5a7a7a;">—</td>`;
                if (metric.isPercent) return `<td style="color:${textColor};">${v.toFixed(1)}%</td>`;
                if (metric.key === 'ngaytb') return `<td style="color:${textColor};">${v.toFixed(1)}</td>`;
                return `<td style="color:${textColor};">${v.toLocaleString('vi-VN')}</td>`;
            }).join('')}
            <td class="year-col" style="color:${textColor};">${displayValue}${(metric.isAvg === true) && validCount < 12 ? ` <span style="font-size:0.67rem;">(/${validCount} th)</span>` : ''}</td>
            <td class="year-col" style="color:${textColor};">${khValue ? ((metric.isAvg === true) ? khValue.toFixed(1) + (metric.isPercent ? '%' : '') : khValue.toLocaleString('vi-VN') + (metric.isPercent ? '%' : '')) : '—'}</td>
            <td class="year-col" style="color:${htColor};">${phanTram !== null ? phanTram.toFixed(1) + '%' : '—'}</td>
        </tr>`;
    });
    
    const compareNames = { kham: 'Khám bệnh', noitru: 'Nội trú', ngaydt: 'Ngày điều trị', ngaytb: 'Ngày ĐT TB', congsuat: 'Công suất', bhyt_rate: 'Tỷ lệ BHYT', noitru_banngay: 'Điều trị ban ngày', chuyenden: 'Chuyển đến', chuyendi: 'Chuyển đi', dieutri_ngoaitru: 'Điều trị ngoại trú' };
    let compareData, compareTotal;
    
    if (currentMetric === 'congsuat') {
        compareData = getCongSuatTheoThang(prevYear);
        compareTotal = tinhTrungBinhSoSanh(year, prevYear, 'congsuat');
    } else if (currentMetric === 'ngaytb') {
        compareData = getNgayDTTrungBinhTheoThang(prevYear);
        compareTotal = tinhTrungBinhSoSanh(year, prevYear, 'ngaytb');
    } else if (currentMetric === 'bhyt_rate') {
        compareData = getTyLeBhytTheoThang(prevYear);
        compareTotal = tinhTrungBinhSoSanh(year, prevYear, 'bhyt_rate');
    } else if (currentMetric === 'noitru_banngay') {
        compareData = monthlyData.noitru_banngay[prevYear];
        compareTotal = tinhTongSoSanh(year, prevYear, 'noitru_banngay');
    } else if (currentMetric === 'chuyenden') {
        compareData = monthlyData.chuyenden[prevYear];
        compareTotal = tinhTongSoSanh(year, prevYear, 'chuyenden');
    } else if (currentMetric === 'chuyendi') {
        compareData = monthlyData.chuyendi[prevYear];
        compareTotal = tinhTongSoSanh(year, prevYear, 'chuyendi');
    } else if (currentMetric === 'dieutri_ngoaitru') {
        compareData = monthlyData.dieutri_ngoaitru[prevYear];
        compareTotal = tinhTongSoSanh(year, prevYear, 'dieutri_ngoaitru');
    } else {
        compareData = monthlyData[currentMetric]?.[prevYear];
        compareTotal = tinhTongSoSanh(year, prevYear, currentMetric);
    }
    
    const compareDisplay = formatValue(compareTotal, currentMetric);
    const soThangHienTai = getSoThangCoDuLieu(year, currentMetric === 'bhyt_rate' ? 'bhyt_count' : currentMetric);
    const kyTextTable = (soThangHienTai < 12 && soThangHienTai > 0) ? ` (cùng kỳ ${soThangHienTai} tháng)` : '';
    
    rows += `<tr style="background:#0a1a1a; border-top:2px solid #2a6a6a;">
        <td style="text-align:left; font-weight:700; color:#50e0c0;">${prevYear}${kyTextTable} (So sánh ${compareNames[currentMetric] || currentMetric})</td>
        ${monthsShort.map((_, idx) => {
            let val = compareData ? compareData[idx] : null;
            if (val === null) return `<td style="color:#5a7a7a;">—</td>`;
            if (currentMetric === 'congsuat') val = val.toFixed(1) + '%';
            else if (currentMetric === 'ngaytb') val = val.toFixed(1);
            else if (currentMetric === 'bhyt_rate') val = val.toFixed(1) + '%';
            else val = val.toLocaleString('vi-VN');
            return `<td style="color:#50e0c0;">${val}</td>`;
        }).join('')}
        <td class="year-col" style="color:#50e0c0;">${compareDisplay}</td>
        <td class="year-col">—</td>
        <td class="year-col">—</td>
    </tr>`;
    
    tableBody.innerHTML = rows;
    updateChart();
    updateBarChart();
    updatePieChart();
}

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
    } else if (currentMetric === 'bhyt_rate') {
        dataCurr = getTyLeBhytTheoThang(currentYear);
        dataPrev = getTyLeBhytTheoThang(compareYear);
    } else if (currentMetric === 'noitru_banngay') {
        dataCurr = monthlyData.noitru_banngay?.[currentYear];
        dataPrev = monthlyData.noitru_banngay?.[compareYear];
    } else if (currentMetric === 'chuyenden') {
        dataCurr = monthlyData.chuyenden?.[currentYear];
        dataPrev = monthlyData.chuyenden?.[compareYear];
    } else if (currentMetric === 'chuyendi') {
        dataCurr = monthlyData.chuyendi?.[currentYear];
        dataPrev = monthlyData.chuyendi?.[compareYear];
    } else if (currentMetric === 'dieutri_ngoaitru') {
        dataCurr = monthlyData.dieutri_ngoaitru?.[currentYear];
        dataPrev = monthlyData.dieutri_ngoaitru?.[compareYear];
    } else {
        dataCurr = monthlyData[currentMetric]?.[currentYear];
        dataPrev = monthlyData[currentMetric]?.[compareYear];
    }
    
    dataCurr = dataCurr ? dataCurr.map(v => v === null ? NaN : v) : Array(12).fill(NaN);
    dataPrev = dataPrev ? dataPrev.map(v => v === null ? NaN : v) : Array(12).fill(NaN);
    
    const colors = { kham: '#2dd4bf', noitru: '#facc15', ngaydt: '#a78bfa', ngaytb: '#fb7185', congsuat: '#34d399', bhyt_rate: '#f97316', noitru_banngay: '#06b6d4', chuyenden: '#a78bfa', chuyendi: '#fb7185', dieutri_ngoaitru: '#818cf8' };
    const names = { kham: 'Khám bệnh', noitru: 'Nội trú', ngaydt: 'Ngày điều trị', ngaytb: 'Ngày ĐT TB', congsuat: 'Công suất', bhyt_rate: 'Tỷ lệ BHYT', noitru_banngay: 'Điều trị ban ngày', chuyenden: 'Chuyển đến', chuyendi: 'Chuyển đi', dieutri_ngoaitru: 'Điều trị ngoại trú' };
    
    const datasets = [
        { label: `${currentYear} - ${names[currentMetric]}`, data: dataCurr, borderColor: colors[currentMetric] || '#2dd4bf', borderWidth: 2.5, tension: 0.2, pointRadius: 3, pointBackgroundColor: colors[currentMetric], spanGaps: false },
        { label: `${compareYear} - ${names[currentMetric]}`, data: dataPrev, borderColor: '#facc15', borderWidth: 2, tension: 0.2, pointRadius: 3, borderDash: [5, 5], spanGaps: false }
    ];
    
    if (currentMetric === 'congsuat') {
        const khValue = keHoachNam.congsuat?.[currentYear];
        if (khValue !== undefined && khValue !== null) {
            datasets.push({ label: `KH ${currentYear} (mục tiêu)`, data: monthsFull.map(() => khValue), borderColor: '#fb7185', borderWidth: 2, borderDash: [10, 5], tension: 0, pointRadius: 0, fill: false });
        }
    }
    if (currentMetric === 'bhyt_rate') {
        const khValue = keHoachNam.bhyt_rate?.[currentYear];
        if (khValue !== undefined && khValue !== null) {
            datasets.push({ label: `KH ${currentYear} (mục tiêu)`, data: monthsFull.map(() => khValue), borderColor: '#fb7185', borderWidth: 2, borderDash: [10, 5], tension: 0, pointRadius: 0, fill: false });
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
                            if (currentMetric === 'bhyt_rate') return label + ': ' + value.toFixed(1) + '%';
                            if (currentMetric === 'noitru_banngay') return label + ': ' + value.toLocaleString('vi-VN') + ' lượt';
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

function updateReportMonths() {
    const year = currentYear;
    let soThangCoDuLieu = 0;
    const khamData = monthlyData.kham[year];
    if (khamData) {
        soThangCoDuLieu = khamData.filter(v => v !== null).length;
    }
    const reportMonthsSpan = document.getElementById('reportMonths');
    if (reportMonthsSpan) {
        reportMonthsSpan.innerText = soThangCoDuLieu;
    }
}

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
        updateBarChart();
    });
});

document.getElementById('compareYearLabel').innerText = compareYear;
updateDashboard();