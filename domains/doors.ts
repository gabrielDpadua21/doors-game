import DoorModel from "../model/Door";

export function createDoors(quantity: number, selected: number): DoorModel[] {
    const doors = Array.from({ length: quantity }, (_, i) => {
      const number = i + 1;
      const havePresent = number === selected;
      return new DoorModel(number, havePresent);
    });
    return doors;
}

export function updateDoors(doors: DoorModel[], newDoor: DoorModel): DoorModel[] {
    return doors.map(door => {
        if(door.number === newDoor.number) return newDoor;
        return door.open ? door : door.unseleted();
    });
}