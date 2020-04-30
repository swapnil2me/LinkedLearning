import PIL.Image
import PIL.ImageDraw
import face_recognition

image = face_recognition.load_image_file("testImage.jpg")

#Generate the face encodings
face_encodings = face_recognition.face_encodings(image)

if len(face_encodings) == 0:
    # No face found in the Image
    print("No face in image")

else:
    # Grab the first face encoding
    first_face_encoding = face_encodings[0]

    #print result
    print(first_face_encoding)
