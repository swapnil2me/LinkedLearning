import PIL.Image
import PIL.ImageDraw
import face_recognition

image = face_recognition.load_image_file("testImage.jpg")

#Find all the faces in the Image
face_landmark_list = face_recognition.face_landmarks(image)

number_of_faces = len(face_landmark_list)
print("Found {} faces in this image".format(number_of_faces))

#Load the image into Python Imge Library object
pil_image = PIL.Image.fromarray(image)

#Create PIL drawing object
draw = PIL.ImageDraw.Draw(pil_image)

# Loop over each face
for face_landmarks in face_landmark_list:

    #Loop over each facial feature (eye, nose, mouth, lips ...)
    for name, list_of_points in face_landmarks.items():

        #Print the location of each facial feature in this Image
        print("The {} in this face has following points: {}".format(name,list_of_points))

        #Let's trace out each facial feature in the image with a line
        draw.line(list_of_points, fill='red', width = 2)


pil_image.show()
