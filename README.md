# test-task
Скарби Прона не давали спокою )

Задачку підкинули як тестову хлопці з курсів. (побачив десь в 19-30) Я таке дуже люблю тому лекцію слухав у піввуха, але все таки слухав :) .

За якісь, відносно невеликий час, зрозумів шо ми маємо масив, заповнений по діагоналі, Трохи часу грався, покі допер як яого заповнити через звичайний цикл. Малював на листочку і доперло шо координати діагоналі треба одночасно: одну ++, іншу -- ; Задля тесту зробив великим фором - спрацювало. Туди ж поставив перевірку на № значення. Вуаля - лобове рішення готово. (зашарив в чатик о 22-33). Там же написав шо можна прибрати for і воткнути замісь нього while. Ніколи ще не робив while шоб не повісити броузер ;) але то не страшно. Зашарив рішення в 23-03. В процесі писання подумав шо , можливо, в циклі ганяти відразу 2 змінні. Але вірішив що глобально задачка в тупому варіанті зроблена і  пішов спати.

Умову, про всяк випадок записав в заметки на телефоні, згадавши про свого знайомого з трені Сірожу, якій чи то єкономіст, чи математик - не точно, але чел точно цікавий і толковий. Сьоні побачив його. Поговорили з 5 хвилин. Резюме з розмови - спитай у гугля про заповненість матриці. 

Дорогою з трені замісь ютубчиків або "розробки високонагружених приложеній" - почав гуглити матриці. Познаходив кацапський кібер форум, на ньому - лаби по С++ з усякими сумами відємних чисел нижче середньої лінії матриці. Я близько, але це не те :( . # solution  В якісь момент мене перемкнуло - це ж трикутник. Гугел - площа трикутника 4*4=16/2 = 8 - не підходить, сум. Стоп це ж не половина, не просто так там була якась середеня лінія матриці. А ну, як я можу порахувати? скільки елементів не вистачає до 16?  Відкрив заметки і дивився у електронний екран, бо не було з собою паперового блокнотика, позаповнювати цифри для зручності. 

 | 10
 
 | 6 9
 
 | 3 5 8
 
 | 1 2 4 7
 
- - - - - 

Номер діагональки (2,3)=3+(2-1)=4 
Кількість елементів при 4*4 = 4*4-((4*4-4)/2)  
Віднявши від загальної кількості один з індексів - буде наше число.

Реально за хвилин 20 з Гідри до Академа поняв як робити. Вдома погрався з собанею і написав прогу швидче ніж цей опис до неї :)
