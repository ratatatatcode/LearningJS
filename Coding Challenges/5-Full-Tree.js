// 5. Full-Tree (30 minutes)
// I almost used GPT, haha! Thanks to Google for process.stdout.write.

function fullTree(height) {
    let counter = 1;
    for(i = height-1; i >= 0; i--) {
        process.stdout.write(" ".repeat(i));
        for(j = counter; j == counter; j++) {
            process.stdout.write("*".repeat(j) + "\n");
        }
        counter = counter + 2;
    }
}

fullTree(5);

/*
    *
   ***
  *****
 *******
*********
*/

// Solution From GPT
// const height = 5; // You can change the height as needed

// for (let i = 0; i < height; i++) {
//     let spaces = ' '.repeat(height - i - 1);
//     let stars = '*'.repeat(2 * i + 1);
//     console.log(spaces + stars);
// }