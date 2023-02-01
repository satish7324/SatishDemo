Create following HTML files (with proper designing and layout) and use Javascript to satisfy the below mentioned requirements.

1) numeric1.htm
	Requirement :

		- Check if the value entered in Text Box is a numeric value or not,
			i.e., text characters and even null/empty values should not be allowed.
		- Error messages : In case of empty field - "Please enter any numeric value" and
			in case of non-numeric value - "Only numeric values are allowed. Please re-enter the value".
			Final message - "Entered value is a numeric value".
		-PROVIDE APPROPRIATE FOCUS TO THE ERROR FIELDS.


	HINT : Use in-built javascript "isNaN()" function.

2) numeric2.htm
	Requirement :

		- Check if the value entered in Text Box is a numeric value or not,
		i.e., text characters and even null/empty values should not be allowed.
		- Error message needs to be : In case of empty field - "Please enter any numeric value" and
		in case of non-numeric value - "Only numeric values are allowed. Please re-enter the value". 
		Final message - "Entered value is a numeric value".
		- Provide appropriate focus to the error fields.

	DO NOT USE in-built javascript "isNaN()" function.      MIGHT BE USE OF TYPEOF() return function

3) submitfrombutton.htm
	Requirement :

		- Submit the form using "button" type instead of "submit" input type.
4) singlespan.htm
	Requirement :

		- Label : "Please select your technology :".
		- Consider following set of radio buttons :-
		"PHP", "ASP.NET", "ASP", "JSP", "PERL", "Cold Fusion", "Other". Layout these buttons in a Horizontal manner.
		- Clicking on a particular radio button should display the related technology name besides label : "You have selected : ".
		- Use only one "span" HTML element for displaying the related message.
		- Note that radio button should be selectable by clicking on the corresponding label.
		
5) multiplespan.htm
	Requirement :
		
		- Label : "Please select your technology :"
		- Consider following set of radio buttons :-
		  "PHP", "ASP.NET", "ASP", "JSP", "PERL", "Cold Fusion", "Other". Layout these buttons in a Horizontal manner.
		- Clicking on a particular radio button should display the related technology name besides label : "You have  selected : ".
		- Use multiple "span" HTML element for displaying the related message.
		- Note that radio button should be selectable by clicking on the corresponding label.
			

6) multiplebutton.htm
	Requirement :


		- Clicking on different buttons ("button" input type) should submit the form to different pages.
		- Consider "numeric1.htm" and "numeric2.htm" files for this.
		- Label 1 : Please click on "Submit 1" button for opening numeric1.htm
		- Label 2 : Please click on "Submit 2" button for opening numeric2.htm
		- Clicking on "Submit 1" button will open "numeric1.htm" while clicking on "Submit 2" button will open "numeric2.htm" in the same window.
		- Use Browser back button for traversing among various pages.
		
7) checkboxes.htm
	Requirement :
			
		- Checking/Un-checking "Check All" check box should check/un-check all
		  the other corresponding check boxes.
		  Also, if "Check All" check box is checked and
		  if user un-checks any other check box then "Check All" check box should be un-checked.
		- When all check boxes are checked and "Check All" check box should get checked.
		- Consider a check-box with "Check All" label.
		- Other checkboxes presented in a vertical manner :
         			  (i) USA (ii) UK (iii) India (iv) Asia Pacific (v) Australia(vi) Middle East
		- Note that checkbox should be selectable by clicking on the corresponding label.

8) datevalidation.htm
	Requirement :

		- Date entered by the user should be checked for whether it is a Valid Date or not.
		  Entered date should be in "MM-DD-YYYY" format.
		  Display the Date Format along with the Text Box.
		
		- You are required to perform following checks :

			- Entered characters should be digits only.
			- Month should be within the range 1 to 12.
			- Days should be within the range 1 to 31.
				Check the entered Days and its corresponding Month.
			E.g.	1) Month of April cannot have days less than 1 and more than 30 days.
				2) Month of February cannot have days less than 1 and more than 28 days.
				   If the Current Year is a Leap Year then User can provide 29 days for
				   the month of February.

		 - Error messages :

			- "Please enter date in MM-DD-YYYY format"
			- "Invalid date. Please enter date in MM-DD-YYYY format"
			- "Invalid month. Month should be within the range 1 to 12"
			- "Invalid day. Day should be within the range 1 to 31" (or as applicable)

		- Final message :

			- You have entered valid date. Its "20-10-1980". Thank you.

9) math.htm
	Requirement :

		- Create an application for performing basic math operations like Addition, Subtraction,
		  Multiplication and Division.

		- Consider following elements :
		(i) Label : "Please enter first number : " with Text Box
		(ii) Label : "Please enter second number : " with Text Box
		(iii) Label : "Please select operation you want to perform : "

		with set of Radio Buttons like "Addition", "Subtraction", "Multiplication" and "Division"
		presented in vertical manner.

		(iv) Two buttons, viz, "Calculate" and "Reset"
		(v) Label : "Result is : " with final result

		- Place all the checks to make sure that user enters only numeric values for text boxes.
		  Also, make sure that user selects the operation radio button before clicking on the
		  "Calculate" button.

		- Clicking on "Calculate" button will perform the requested operation and
		  the result will be displayed below "Calculate" and "Reset" buttons in the form of text,
		  e.g. : "Result is : 10".

		- Clicking on "Reset" button will reset all the form information including radio button
		  selection and result text.
			
		- Error messages :
			- Please enter first number or Please enter second number
			- Please enter only numeric value for first number or Please enter only numeric
			  value for second number
			- Please select the operation you want to perform

NOTE :- Validation flow will be top to bottom.

10) popup1.htm and popup2.htm
	Requirement :
		- Create 2 HTML pages, viz. popup1.htm and popup2.htm.

		- popup1.htm will have text "Please click here in order to read our Terms and Conditions"
		  and a button "Read".

		  When user clicks on "Read" button,
		  open a pop-up window (popup2.htm).
		
		This newly opened "popup2.htm" window will have following features :
			- It will be opened at 100, 100 position of existing window.
			- It will not be allowed to resize.
			- It will be of height 200 and width 400.
			- It will not contain toolbar.
			- It will not contain address bar.

		- Pop-up window "popup2.htm" will have following information :
	
			- Static text "Welcome and please agree with our Terms and Conditions"
			  and a "Close" button. When user clicks on "Close" button.
 			  "popup2.htm" should be closed.


11) print.htm
	Requirement :

	- Put a button called "Print". Clicking on it should open the 'print' dialog of the browser. (Make sure printer is installed on the machine). If it is not installed, just write the code.
	
12) droplist.htm
	Requirement :

	- Put a droplist with 5 country name
	  (Eg. India, United Kingdom..). Default value should "Please select".
	- Bellow droplist all country name which are in the dropdown that should display with Label :
	  "Your Selected Country : ".
	- By default all country name should display.
	- Only that country name should appear which are you select from dropdown.
	  All other label should be disappear.
	- When i select 'Please select', all countries name should get displayed.

13) domfile.htm
	Requirement : 
	
	- Click on 'Add a Contact' link. text box should generate using js(DOM) with 'x' sign.
	  click on that 'x' sign remove that textbox.
	- "Add a Contact" sign should gererate 'n' number of textbox.
