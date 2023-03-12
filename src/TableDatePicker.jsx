import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TableDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const validateDate = (date) => {
    const currentDate = new Date();
    const selectedDOB = new Date(date);
    const timeDiff = Math.abs(currentDate.getTime() - selectedDOB.getTime());
    const ageInYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    return ageInYears > 18;
  };

  const handleDateChange = (date) => {
    if (validateDate(date)) {
      setSelectedDate(date);
    } else {
      setSelectedDate(null);
      alert('age cannot be less than 18 years!');
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => handleDateChange(date)}
      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={100}
      maxDate={new Date()}
      placeholderText="Select your Date of Birth"
      dateFormat="dd/MM/yyyy"
      isClearable
    />
  );
}

export default TableDatePicker;
