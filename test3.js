function convertTime(unit, value) {
    switch (unit) {
      case 'hours':
        return {
          minutes: value * 60,
          seconds: value * 3600
        };
      case 'minutes':
        return {
          hours: value / 60,
          seconds: value * 60
        };
      case 'seconds':
        return {
          hours: value / 3600,
          minutes: value / 60
        };
      default:
        return {};
    }
  }

  function handleConvertClick(inputId, targetUnits) {
    const convertButton = document.getElementById(`convert${targetUnits}`);
    const inputField = document.getElementById(`${targetUnits}Input`);

    convertButton.addEventListener('click', function () {
      const inputValue = parseFloat(inputField.value);

      if (!isNaN(inputValue)) {
        const convertedValues = convertTime(targetUnits.toLowerCase(), inputValue);

        for (const unit in convertedValues) {
          if (convertedValues.hasOwnProperty(unit)) {
            const targetInput = document.getElementById(`${unit}Input`);
            targetInput.value = convertedValues[unit].toFixed(2);
          }
        }
      } else {
        alert('Please enter a valid number.');
      }
    });
  }