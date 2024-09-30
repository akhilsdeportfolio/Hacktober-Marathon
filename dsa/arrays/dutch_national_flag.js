// Given an array of elements containing only  0,1,2's , arrange them in increasing order 

const INPUT = [1,1,2,2,0,1,0,1,0,1];


function sortInput(arr=[])
{
    let low=0,mid=0;hi=arr.length-1;

    while(mid<=hi)
    {
        let current = arr[mid];
        console.log(current);
        switch(current)
        {
            case 0:
                [arr[low],arr[mid]]=[arr[mid],arr[low]]
                low++;
                mid++;
             //   console.log("Zero:::",arr,low,mid,hi);
                break;
            case 1:
                mid++;
            // console.log("One:::",arr,low,mid,hi);
                break;
            case 2:
                [arr[mid],arr[hi]]=[arr[hi],arr[mid]]
                hi--;
             //  console.log("Two:::",arr,low,mid,hi);
                break;
        }

    }
    console.log("After sorted",arr);
}


sortInput(INPUT);
