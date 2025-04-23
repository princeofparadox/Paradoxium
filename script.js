const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

// Sample holidays for 2025
const holidays = {
  '2025-01-26': 'Republic Day',
  '2025-03-14': 'Holi',
  '2025-04-10': 'Mahavir Jayanti',
  '2025-04-18': 'Good Friday',
  '2025-08-15': 'Independence Day',
  '2025-10-02': 'Gandhi Jayanti',
  '2025-10-21': 'Diwali'
};

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date().toISOString().slice(0, 10);  // Today in YYYY-MM-DD format

  calendarBody.innerHTML = '';
  let row = document.createElement('tr');

  // Fill initial empty cells
  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement('td'));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if (row.children.length === 7) {
      calendarBody.appendChild(row);
      row = document.createElement('tr');
    }

    const cell = document.createElement('td');
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    cell.textContent = day;

    // Highlight holidays
    if (holidays[dateStr]) {
      cell.classList.add('holiday');
      cell.title = holidays[dateStr];
    }

    // Highlight today
    if (dateStr === today) {
      cell.classList.add('today');
    }

    row.appendChild(cell);
  }

  // Fill remaining cells
  while (row.children.length < 7) {
    row.appendChild(document.createElement('td'));
  }
  calendarBody.appendChild(row);
}

prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initialize calendar
renderCalendar(currentDate);
