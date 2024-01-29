function modifyWorker(worker) {
    if (worker.dizziness) {
        const requiredWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredWater;
        worker.dizziness = false;
    }

    return worker;
}

// Examples
const worker1 = { weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true };
console.log(modifyWorker(worker1));
// Output: { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

const worker2 = { weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true };
console.log(modifyWorker(worker2));
// Output: { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

const worker3 = { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false };
console.log(modifyWorker(worker3));
// Output: { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }
