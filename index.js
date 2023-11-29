// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
npc.walkEast(1500)
    .then( ()=> npc.walkEast(1200))
    .then( ()=> npc.walkSouth(300))
    .then( ()=> npc.walkEast(1500))
    .then( ()=> npc.walkSouth(1500))
    .then( ()=> npc.walkWest(2700))
    .then( ()=> npc.walkNorth(400))

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)



// Function to check for 2D collision between two entities

// function isCollision(npc, sword) {
//     const sword = (x: 500, y: 555, width: 100, height: 100)
//     const pillar = (x: 350, y: 250, width: 100, height: 100)

//     return (
//       npc.x < sword.x + sword.width &&
//       npc.x + npc.width > sword.x &&
//       npc.y < sword.y + sword.height &&
//       npc.y + npc.height > sword.y
//     );
//   }
  
  // Example usage

// const sword = (x: 500, y: 555, width: 100, height: 100)
// const pillar = (x: 350, y: 250, width: 100, height: 100))

  
//   if (isCollision(npc, sword)) {
//     console.log('Collision detected!');
//   } else {
//     console.log('No collision.');
//   }
  