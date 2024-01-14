async function bubble(){

const ele=document.querySelectorAll(".sort");

for(let i=0; i<ele.length-1; i++)
{
    for(j=0; j<ele.length-i-1; j++)
    {
        ele[j].style.background='red';
        ele[j+1].style.background='red';

        if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
        {
            await delay(time);
            swap(ele[j], ele[j+1]);
        }

        ele[j].style.background='white';
        ele[j+1].style.background='white';
    }

    ele[ele.length-i-1].style.background='green';
}
ele[0].style.background='green';
}
document.getElementById('bubble').addEventListener("click", async function(){
    disableSizeSlider();
    disableSortingBtn();
    await bubble();
    enableSizeSlider();
    enableSortingBtn();
});

