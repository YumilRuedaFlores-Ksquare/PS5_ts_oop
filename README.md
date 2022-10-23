# PS5_ts_oop

## Problem 1 Markup

<img  src = "https://user-images.githubusercontent.com/113385187/197419015-fa661860-d4e0-4069-b5c8-94a5b4a9b959.PNG" width="500" >

Image of what my markup looks like with the given json:
Image with the json I created ([link](https://gist.githubusercontent.com/YumilRuedaFlores-Ksquare/1392d19bb568ea159a14dd91ee37da62/raw/b907d90055caf401b47853d13a7d90f352667d45/example.json) to show that no matter how many frames (cards) are added, my program can do it.

<img src ="https://user-images.githubusercontent.com/113385187/197419016-34716302-29e0-416f-ad8b-3c1a39be6621.PNG " width="500"> 

My gist for the json made by me:

<img src ="https://user-images.githubusercontent.com/113385187/197419018-f4e9d526-c3f8-40b7-9c44-c69f7db0c236.PNG" width="500"> 

## Problem 2 Matrix:
In the following picture I show how it works, the first example is the addition of two matrices as shown below and the second example is the attempt to add two matrices of different dimensions which prints a "NOOP".

    A = [ 0 10]    B = [ 0 0 ]     
        [ 0 0 ]        [ 0 10]     
Then we start with the multiplications, I added a "SIP" for when the multiplication is possible, the matrices used in both examples I will put them here below as well as the result of the multiplication of these. EX1 and EX2 respectly:

     m1 = [ 1 2 ] m5 = [ 1 ]  result in m1 = [ 5  ]  m3 = [ 3 2 1 ]   m4 = [ 2 1 ]   result in m3 = [ 11 5 ]                  
          [ 3 4 ]      [ 2 ]                 [ 11 ]       [ 1 1 3 ]        [ 1 0 ]                  [ 12 7 ]
                                                          [ 0 2 1 ]        [ 3 2 ]                  [ 5  2 ]

Finally I multiply m3 by m1 and it is possible because m3 (rows:3, columns:2) and m1 (rows:2, columns: 1).
Then it is obvious, the rule is respected, the column of the first matrix and the rows of the second are of the same dimension, but for the following example, it is a "NOOP" because I invert the cases and the foundation is not fulfilled because 1 !=3.

<img src ="https://user-images.githubusercontent.com/113385187/197419018-f4e9d526-c3f8-40b7-9c44-c69f7db0c236.PNG" width="500"> 

## Problem 3 Pizza:

Code to create the pizza's objects

<img src ="https://user-images.githubusercontent.com/113385187/197419053-bdfa936a-800a-4fb3-aafc-3a9b1ff3a435.PNG" width="500"> 
Result:

<img src ="https://user-images.githubusercontent.com/113385187/197419052-f109f78a-b5dd-48f4-b526-11a0a10f45fd.PNG" width="500"> 


