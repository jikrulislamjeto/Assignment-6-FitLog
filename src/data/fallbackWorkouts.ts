import { Workout } from "@/types/workout";

export const fallbackWorkouts: Workout[] = [
  {
    id: 1,
    name: "Barbell Bench Press",
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    muscleGroups: ["Chest", "Arms"],
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    duration: 25,
    caloriesBurned: 180,
    sets: 4,
    reps: "6-8",
    rating: 4.8,
    description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    instructions: [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and a natural arch in the back."
    ]
  },
  {
    id: 2,
    name: "Pull-Up",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740",
    muscleGroups: ["Back", "Arms"],
    equipment: "Pull-up Bar",
    difficulty: "Intermediate",
    duration: 15,
    caloriesBurned: 120,
    sets: 4,
    reps: "6-10",
    rating: 4.7,
    description: "Bodyweight vertical pull for wide lats, upper back thickness, and biceps recruitment.",
    instructions: [
      "Grip the bar slightly wider than shoulder-width with overhand grip.",
      "Hang with arms fully extended and engage your core.",
      "Pull chest toward the bar by driving elbows down toward your ribs.",
      "Lower under control back to a full dead hang before the next rep."
    ]
  },
  {
    id: 3,
    name: "Back Squat",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691401.jpg?w=740",
    muscleGroups: ["Legs", "Core"],
    equipment: "Barbell, Rack",
    difficulty: "Advanced",
    duration: 30,
    caloriesBurned: 240,
    sets: 5,
    reps: "5",
    rating: 4.9,
    description: "The king of lower-body movements targeting quads, glutes, hamstrings, and trunk rigidity.",
    instructions: [
      "Set the bar across upper traps and unrack with a solid braced stance.",
      "Inhale, brace the trunk, and sit hips back and down below parallel.",
      "Drive out of the hole through mid-foot while keeping chest proud.",
      "Lock hips and knees at the top with glutes clenched."
    ]
  },
  {
    id: 4,
    name: "Overhead Press",
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666703.jpg?w=740",
    muscleGroups: ["Shoulders", "Arms"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    duration: 20,
    caloriesBurned: 150,
    sets: 4,
    reps: "6-8",
    rating: 4.6,
    description: "Strict vertical press building boulder shoulders, upper chest fibers, and standing balance.",
    instructions: [
      "Rest the bar on front deltoids with hands just outside shoulders.",
      "Squeeze glutes and quads to create an immovable base.",
      "Press the bar overhead in a straight line, tilting head back slightly.",
      "Lock out overhead with bar centered over mid-foot."
    ]
  },
  {
    id: 5,
    name: "Dumbbell Bicep Curl",
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666702.jpg?w=740",
    muscleGroups: ["Arms"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    duration: 12,
    caloriesBurned: 80,
    sets: 3,
    reps: "10-12",
    rating: 4.3,
    description: "Isolation movement focused on peak bicep contraction and controlled eccentric stretch.",
    instructions: [
      "Stand tall holding dumbbells at your sides with palms forward.",
      "Curl weights upward while pinning elbows firmly to your sides.",
      "Squeeze biceps hard at the peak for one second.",
      "Lower under control for three seconds until arms are straight."
    ]
  },
  {
    id: 6,
    name: "Hollow-Body Plank",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691489.jpg?w=740",
    muscleGroups: ["Core"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    duration: 10,
    caloriesBurned: 60,
    sets: 3,
    reps: "45s",
    rating: 4.4,
    description: "Gymnastic core hold establishing unbreakable anterior chain tension and ribcage control.",
    instructions: [
      "Place forearms on the floor with elbows directly under shoulders.",
      "Tuck tailbone, round the upper back slightly into protraction.",
      "Squeeze glutes and pull belly button up toward the spine.",
      "Breathe through the nose while maintaining total body rigidity."
    ]
  },
  {
    id: 7,
    name: "Burpee",
    image: "https://img.magnific.com/free-photo/3d-cartoon-business-character_1048-16544.jpg?w=740",
    muscleGroups: ["Full Body"],
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    duration: 12,
    caloriesBurned: 160,
    sets: 4,
    reps: "15",
    rating: 4.2,
    description: "Full-body metabolic conditioning drill driving heart rate and explosive power endurance.",
    instructions: [
      "Drop into a squat and plant hands firmly on the ground.",
      "Kick feet back into a push-up plank and lower chest to floor.",
      "Press up aggressively and snap feet back under your hips.",
      "Jump vertically with hands reaching overhead."
    ]
  },
  {
    id: 8,
    name: "Conventional Deadlift",
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666704.jpg?w=740",
    muscleGroups: ["Back", "Legs"],
    equipment: "Barbell",
    difficulty: "Advanced",
    duration: 28,
    caloriesBurned: 260,
    sets: 4,
    reps: "5",
    rating: 4.9,
    description: "The quintessential posterior chain lift testing raw hip hinge power and spine stabilization.",
    instructions: [
      "Step under bar with shins one inch away and feet hip-width.",
      "Hinge at hips, grip bar, and pull chest up to pull slack out.",
      "Push floor away with legs while keeping the bar glued to shins.",
      "Lock out hips forcefully at top without hyperextending lower back."
    ]
  },
  {
    id: 9,
    name: "Push-Up",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691429.jpg?w=740",
    muscleGroups: ["Chest", "Arms", "Core"],
    equipment: "Bodyweight",
    difficulty: "Beginner",
    duration: 10,
    caloriesBurned: 90,
    sets: 3,
    reps: "15-20",
    rating: 4.5,
    description: "Foundational pressing pattern building chest, triceps, and serratus anterior strength.",
    instructions: [
      "Set hands slightly wider than shoulders and lock body in a plank.",
      "Lower chest to an inch off floor with elbows at 45-degree angle.",
      "Press through full palms back up to full lockout.",
      "Do not let lower back sag or hips shoot into the air."
    ]
  },
  {
    id: 10,
    name: "Walking Lunge",
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666701.jpg?w=740",
    muscleGroups: ["Legs"],
    equipment: "Dumbbells (optional)",
    difficulty: "Intermediate",
    duration: 18,
    caloriesBurned: 170,
    sets: 3,
    reps: "12 each leg",
    rating: 4.4,
    description: "Dynamic unilateral leg movement improving quad and glute symmetry and knee stability.",
    instructions: [
      "Step forward with front foot planted flat and torso upright.",
      "Lower back knee smoothly until it hovers just above ground.",
      "Push through front heel to step directly into the next stride.",
      "Maintain active core and prevent front knee collapsing inward."
    ]
  },
  {
    id: 11,
    name: "Russian Twist",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691487.jpg?w=740",
    muscleGroups: ["Core"],
    equipment: "Medicine Ball",
    difficulty: "Beginner",
    duration: 8,
    caloriesBurned: 70,
    sets: 3,
    reps: "20",
    rating: 4.1,
    description: "Rotational core exercise honing obliques and hip flexor endurance in a V-sit posture.",
    instructions: [
      "Sit with knees bent and feet elevated slightly off the floor.",
      "Lean back at 45 degrees while holding a medicine ball or weight.",
      "Rotate torso from side to side, tapping the ball near hip.",
      "Keep head following the movement and avoid rounded spine."
    ]
  },
  {
    id: 12,
    name: "Kettlebell Swing",
    image: "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691505.jpg?w=740",
    muscleGroups: ["Full Body", "Shoulders"],
    equipment: "Kettlebell",
    difficulty: "Intermediate",
    duration: 16,
    caloriesBurned: 200,
    sets: 4,
    reps: "20",
    rating: 4.7,
    description: "Ballistic hip snap developing explosive glute power, grip endurance, and cardiovascular capacity.",
    instructions: [
      "Stand with feet shoulder-width, kettlebell one foot in front.",
      "Hike kettlebell back high between thighs like a football snap.",
      "Drive hips forward aggressively to project kettlebell to chest height.",
      "Let gravity return the bell into the hinge without squatting down."
    ]
  }
];