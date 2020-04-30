from PIL import Image, ImageDraw
import face_recognition

#Load the image into ndarray
image = face_recognition.load_image_file("makeUp.jpeg")

#Find all facial features in all the faces in the Image
face_landmarks_list = face_recognition.face_landmarks(image)

#Load the image into a PIL object to draw on
pil_image = Image.fromarray(image)

d = ImageDraw.Draw(pil_image, 'RGBA')

for face_landmarks in face_landmarks_list:
    # The face landmark detection model returns
    #  chin, left_eyebrow, right_eyebrow, nose_bridge, nose_tip, left_eye, right_eye

    #draw a line over the eyebrows
    d.line(face_landmarks["left_eyebrow"],fill=(128,0,128,100),width=3)
    d.line(face_landmarks["right_eyebrow"],fill=(128,0,128,100),width=3)

    # Draw over the list_of_points
    d.polygon(face_landmarks["top_lip"],fill=(128,0,128,100))
    d.polygon(face_landmarks["bottom_lip"],fill=(128,0,128,100))


pil_image.show()
