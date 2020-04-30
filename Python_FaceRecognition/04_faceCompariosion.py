import face_recognition

p1 = face_recognition.load_image_file("p1.jpeg")
p2 = face_recognition.load_image_file("p2.jpeg")
p3 = face_recognition.load_image_file("p3.jpeg")
p4 = face_recognition.load_image_file("p4.jpeg")

# Get the face encodings of each person
p1_face_encoding = face_recognition.face_encodings(p1)[0]
p2_face_encoding = face_recognition.face_encodings(p2)[0]
p3_face_encoding = face_recognition.face_encodings(p3)[0]
p4_face_encoding = face_recognition.face_encodings(p4)[0]

# Create list of all known face face_encodings
known_face_encodings = [p1_face_encoding,
                        p2_face_encoding,
                        p3_face_encoding,
                        p4_face_encoding]

# Load the image we want to check
u1 = face_recognition.load_image_file("u1.jpeg")

# Get face encodings for any face in picture
u1_face_encodings = face_recognition.face_encodings(u1)


for u1_face_encoding in u1_face_encodings:

    #Test if this unknown face encoding matched any of the 4 people

    result = face_recognition.compare_faces(known_face_encodings, u1_face_encoding)

    name="unknown"

    if result[0]:
        name = "p1"
    elif result[1]:
        name = "p2"
    elif result[2]:
        name = "p3"
    elif result[3]:
        name = "p4"

    print(f"found {name} in the photo")
