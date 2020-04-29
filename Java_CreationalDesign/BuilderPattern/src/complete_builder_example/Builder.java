package complete_builder_example;

import java.awt.Color;
import java.awt.Dimension;

public interface Builder {

	Builder setDimensions(Dimension dimensions);

	Builder setCeilingHeight(int ceilingHeight);

	Builder setFloorNumber(int floorNumber);

	Builder setWallColor(Color wallColor);

	Builder setNumberOfWindows(int numberOfWindows);

	Builder setNumberOfDoors(int numberOfDoors);

}