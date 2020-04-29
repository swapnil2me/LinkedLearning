package complete_builder_example;

import java.awt.Color;
import java.awt.Dimension;

public class Architect {

	public static void main(String[] args) {
		Bedroom room0 = new Bedroom(new Dimension(200,100),132,2,Color.yellow,2,1,true,true);
		Builder room1 = new BedroomBuilder().setDimensions(new Dimension(200, 100));
		Builder room2 = new BedroomBuilder().setDimensions(new Dimension(200, 100)).setWallColor(Color.yellow);
		System.out.println(room0);
		System.out.println(room2);
	}

}
