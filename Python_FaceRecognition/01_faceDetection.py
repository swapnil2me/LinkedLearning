import PIL.Image
import PIL.ImageDraw
import face_recognition

image = face_recognition.load_image_file("testImage.jpg")

#Find all the faces in the Image
face_locations = face_recognition.face_locations(image)

number_of_faces = len(face_locations)
print("Found {} faces in this image".format(number_of_faces))

#Load the image into Python Imge Library object
pil_image = PIL.Image.fromarray(image)

for face_location in face_locations:

    #Print the location of each faces
    top, right, bottom, left = face_location
    print("A face is located at pixel location Top: {}, Left: {}, Bottom: {}, Right: {},".format(
    top,left,bottom,right))

    # Drae a box around the face
    draw = PIL.ImageDraw.Draw(pil_image)
    draw.rectangle([left,top,right,bottom],outline="red")

print('Done Looping')
pil_image.show()
