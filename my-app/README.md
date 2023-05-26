Hello, today I would like to show you my work. I have developed a website that includes five small applications. Each of the applications solves a separate problem. I wanted to add something unique to my portfolio, not just a simple project like a to-do list, calculator, and so on.

It was really interesting to develop these small applications, and I recommend everyone, especially beginners, to do something similar.

So let's get started.

The first application is a small game where you come up with a starting number, for example, "ten," and another number, for example, "twenty." There are two functions available: either double the number or add a digit at the end of the number (e.g., from "ten" to "one hundred one"). The task of the program is to determine if it is possible to transform the first number into the second number using these functions, and it also provides the number of iterations required.

For example:
We enter "ten" in the first input and "one hundred one" in the second input. It shows that we can reach this number in just one iteration ("ten" plus "one" at the end).

Another example:
Now we leave "ten" as it is and enter "two hundred one." The answer is that you can reach this number in two iterations (multiply "ten" by two to get "twenty," then add "one" at the end).

Example 3:
We enter "four thousand twenty-one," and it shows that it requires four iterations (multiply "ten" by two - the first iteration, then add "one" at the end, then multiply "two hundred one" by two, and finally add "one" at the end, resulting in "four thousand twenty-one").

If it is impossible to reach the second number, the program will indicate that.

Example:
We enter "twenty-two," and the answer is "You can't get the number twenty-two."

Next task is quite simple to explain. Here you add items to an array, and if there are duplicate items, they will be highlighted in red.

The third task is more interesting. On the left side, there is a powerlifter girl, and on the right side, there are weight plates on a barbell. The gray ones represent the weight in kilograms, and the darker ones represent the weight in pounds. You can add weight plates in pairs, and the total weight of the barbell, including the "twenty-kilogram" bar, will be displayed at the top. By hovering over a weight plate, you can see its weight in pounds. The hint suggests that you can move the weight plate back to the shelf by clicking on it.

The goal of the task is to select the smallest weight record.

For example, let's try adding "half a kilogram" to the barbell. The weight of the barbell will indicate the current weight. If you agree, press the button.

The next record is "twenty-one kilograms," which needs to be achieved.

Let's try removing "half a kilogram" and adding "one kilogram." The weight of the barbell now is "twenty-two kilograms." Confirm it.

If you provide the wrong answer, another participant will beat the record instead of you. For example, if we add weight plates, the answer will be "Another person set a new record by lifting twenty-three kilograms with minimal effort."

You can continue playing this game until the record reaches "two hundred eighty-two kilograms."

Next task:
For a certain event, participants need to purchase T-shirts. Some participants are not sure about their exact size but can provide two adjacent sizes.
On the left, we have a manager, and on the right, we have the available T-shirts.
As an example, let's purchase two T-shirts for each size.
Here we have the animation of delivery.
We have warehouse stock displayed here.
A list of participants and the sizes they chose will be shown here.
Let's try adding a participant.
We enter the name and choose T-shirts from the list. If we select a size, only the adjacent sizes will remain on the screen.
If participants exceed the limit of available T-shirts in the warehouse, a button will appear at the bottom, allowing us to order the additional required T-shirts.
By clicking on it, we return to the store, where we can immediately see all the sizes of the T-shirts that are needed, and we can order them.
Voilà, all participants will definitely get their T-shirts.

The next task...

In the theater, there is a stage, and we can choose the number of actors on the stage (up to 8 people) and the size of the stage.

The dimensions of the stage have restrictions (length up to 3 meters, width up to 4 meters).
If we enter incorrect data, an error will be displayed.
We formed a stage of 3 by 3 with 5 actors.
Now we can add actors to our sectors.
Projectors appear when adding actors, and they are placed where the lighting is most needed.
For example: 4-2-5-9-7.
We can also create a new stage. Now I will demonstrate the program's operation on a larger stage.
Let's create an example on a stage of 3 by 4 with 8 actors.
At the top, we have a scroll of all the actors.
After selecting an actor, their sector will no longer be highlighted.
We add actors.
Example: 5-6-11-2-9-7-10-8.
As you can see, the maximum number of actors that could be illuminated is highlighted. The task is complete.


I intentionally developed all these applications without using a state manager to delve deeper into the problems that state managers solve. I recommend trying to create a small application without using one—it will enhance the thinking process.

I bid you farewell, and I hope you found it interesting. Have a great day and may your problem-solving be effortless.