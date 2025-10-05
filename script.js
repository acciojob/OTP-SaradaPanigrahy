const codes = document.querySelectorAll('.code');

    // Automatically move to next input after typing a number
    codes.forEach((input, idx) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value && idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && !e.target.value && idx > 0) {
          codes[idx - 1].focus();
        }
      });
    });

    // Ensure first input is focused when page loads
    document.getElementById('code-1').focus();