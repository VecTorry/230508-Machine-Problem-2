let num = prompt("Enter a number between 1 and 100: ")
let rand = Math.floor(Math.random() * 101) + 1;
let tries = 1;

while (num != rand)
{
	if (num > rand)
	{
		num = prompt("Too high! Guess again.\n")
		tries = tries + 1;
	} else if (num < rand)
	{
		num = prompt("Too low! Guess again.\n")
		tries = tries + 1;
	}
	
	if (num == rand)
	{
		alert("Congratulations, you guessed the number in " + tries + " tries")
	}
}