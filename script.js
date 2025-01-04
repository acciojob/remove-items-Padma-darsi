//your JS code here. If required.
function removeSelectedColor() 
{
      const colorSelect = document.getElementById('colorSelect');
      // Remove the selected option from the dropdown
      colorSelect.remove(colorSelect.selectedIndex);
}