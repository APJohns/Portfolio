import os

targetDirectory = 'C:\\Users\\ash-j\\Documents\\GitHub\\Portfolio\\media\\heroicons'
directory = os.fsencode(targetDirectory)

for file in os.listdir(directory):
    filename = os.fsdecode(file)
    if filename.endswith(".svg"): 
        # print(os.path.join(directory, filename))
        f = open(file, 'r')
        content = f.read()
        content = content.replace('fill="')
        f.close()
    else:
        continue