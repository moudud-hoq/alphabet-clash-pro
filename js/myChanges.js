    // Function to change font size by element ID
    function setFontSizeById(elementId) {
        const element = document.getElementById(elementId);
        element.classList.add('text-5xl');
    }

    // Function to change font color by element ID
    function setFontColorById(elementId, color) {
        const element = document.getElementById(elementId);
        element.style.color = color;
    }

    // Function to change font family by element ID
    function setFontFamilyById(elementId) {
        const element = document.getElementById(elementId);
        element.style.fontFamily = "Arial, sans-serif";
    }

    // Function to apply changes in the Home Section
    function myChangesInHomeSection() {
        setFontSizeById('alpha-text');
        setFontColorById('alpha-text', 'blue'); // Change color here
        setFontFamilyById('alpha-text');
    }

    // Function to execute changes when play button is clicked
    function love() {
        myChangesInHomeSection();
    }