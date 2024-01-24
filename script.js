// 1) Anonymouse functions

var result =function(array)
{
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
        {
            console.log(array[i]);
        }
    }
}
result([1,2,3,4]);

(function result(array)
{
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
        {
            console.log(array[i]);
        }
    }
})
([1,2,3,4]);

// 2)

var add = function (str) 
{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) 
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
 }
console.log(add("guvi is the best technology"));

IIFE:

(function array(str)
{
    str = str.toLowerCase().split(' ');
    for(var i =0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log(str.join(' '));
})("guvi is the best technology");


// 3)
var sumofarray = function(arrays)
{
    var sum=0;
    for(var i=0;i<arrays.length;i++)
    {
        sum=sum+arrays[i];
    }
    return sum;
}
console.log(sumofarray([1,2,3,4]));


IIFE:

 (function(arrays)
{
    var sum=0;
    for(var i=0;i<arrays.length;i++)
    {
        sum=sum+arrays[i];
    }
    console.log(sum);
})
([1,2,3,4]);


// 4)

var primenum = function(num)
{
 var count =0;
for(var i=2;i<=num;i++)
{
    var pn =true;
    for(var j=2;j<i;j++)
    {
        if(i%j==0 )
        {
            pn=false;
        }
    }
    if(pn==true)
    {
        count++;
        console.log(i);
    }
}
return count;
}
console.log(primenum(15));

IIFE

(function primenum(num)
{
 var count =0;
for(var i=2;i<=num;i++)
{
    var pn =true;
    for(var j=2;j<i;j++)
    {
        if(i%j==0 )
        {
            pn=false;
        }
    }
    if(pn==true)
    {
        count++;
        console.log(i);
    }
}
})
(15);


// 5)


function isPalindrome(s)
{

    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}


function PalindromicStrings(arr,N)
{
    let ans = [];
    for (let i = 0; i < N; i++) 
    {
        if (isPalindrome(arr[i])) 
        {

            ans.push(arr[i]);
        }
    }
    return ans;
}

let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
let s = PalindromicStrings(arr, N);
if(s.length == 0)
    console.log("-1");
for(let st of s)
  console.log(st," ");

// 6)
var mediansortedArrays = function(arr1,arr2)
{
    let arr =[...arr1,...arr2];
    arr.sort();
    let n=arr.length;
    if(n%2==0)
    {
        return(arr[n/2]+arr[n/2-1])/2;
    }
    else
    {
        return arr[Math.floor(n/2)];
    }
}
console.log(mediansortedArrays([1,4,5],[2,3,6]));

IIFE

(function mediansortedArrays(arr1,arr2)
{
    let arr =[...arr1,...arr2];
    arr.sort();
    let n=arr.length;
    if(n%2==0)
    {
        console.log((arr[n/2]+arr[n/2-1])/2);
    }
    else
    {
        console.log(arr[Math.floor(n/2)]);
    }
})
([1,4,5],[2,3,6]);

// 7)

var duplicateremove = function(arr)
{
    console.log(...new Set(arr));
}
duplicateremove([1,2,3,3,4,5,5,6,6,7,7,8,9]);

IIFE

(function duplicateremove(arr)
{
    console.log(...new Set(arr));
})
([1,2,3,3,4,5,5,6,6,7,7,8,9]);


// 8)
var RotationArray = function(arr,NoofShift)
{
    for(var i =0;i<NoofShift;i++)
    {
        arr.unshift(arr.pop());
        console.log(arr);
    }
}
RotationArray([1,2,3,4,5],3);

IIFE

 (function RotationArray(arr,NoofShift)
{
    for(var i =0;i<NoofShift;i++)
    {
        arr.unshift(arr.pop());
        console.log(arr);
    }
})
([1,2,3,4,5],3);


//2) //Arrow Functions

//1)

var result =(array)=>
{
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
        {
            console.log(array[i]);
        }
    }
}
result([1,2,3,4,5]);


//2)

var add =(str)=>
{
    str=str.toLowerCase().split(' ');
    for(var i =0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
console.log(str.join(' '));
}
add("guvi is the best technology");


//3)
var sumofarray =(arrays)=>
{
    var sum=0;
    for(var i=0;i<arrays.length;i++)
    {
        sum=sum+arrays[i];
    }
console.log(sum);
}
sumofarray([1,2,3,4]);


//4)

var primenum = (num)=>
{
 var count =0;
 for(var i=2;i<=num;i++)
{
    var pn =true;
    for(var j=2;j<i;j++)
    {
        if(i%j==0 )
        {
            pn=false;
        }
    }
    if(pn==true)
    {
        count++;
        console.log(i);
    }
}
console.log(count);
}
primenum(10);


//5)

function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }

 var Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                console.log(false);
        }

        console.log(true);
    }
    Palindrome([10,20,30],2)