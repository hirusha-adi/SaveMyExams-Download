# SaveMyExams Downloader - Tampermonkey

- Involves user engagement
- More time-intensive
- Yields error-free outcomes, ensuring optimal results
- Lightweight

# Installation

## Install Tampermonkey

1. Visit [https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

2. Click "Add to Chrome"

![image](https://user-images.githubusercontent.com/36286877/222946473-60857f0b-2c43-4711-ab0d-6758ffe53b7d.png)

3. Click "Add Extension"

![image](https://user-images.githubusercontent.com/36286877/222946497-a812afdc-fef6-4d23-bb64-ef2592cf868b.png)

## Install

1. Visit [https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl)

2. Click "Add to Chrome"

![image](https://user-images.githubusercontent.com/36286877/222946557-1b5f9d97-0b47-4528-995c-c52306d9e5fb.png)

3. Click "Add Extension"

![image](https://user-images.githubusercontent.com/36286877/222946576-99d7630d-016c-4624-bf6f-1c3667ba4e11.png)

## Setup Tampermonkey

1. Right Click on the Tampermonkey extension and click on "Dashboard"

![image](https://user-images.githubusercontent.com/36286877/222946620-0fb634d4-25a5-4a70-92fe-6f7b5938f49d.png)

2. Click on the `[+]` Button

![image](https://user-images.githubusercontent.com/36286877/222946668-01f81d0e-ec7d-48bb-a844-121866b64087.png)

3. Paste the file contents inside `script.js`

4. Click on **"File" -> "Save"** or Press **CTRL+S**

![image](https://user-images.githubusercontent.com/36286877/222946730-a1a574d4-a452-4a1e-bb1e-2588e763dc72.png)

5. Visit your SaveMyExams Revision Note. Every element should be removed except for the note and the topic

![image](https://user-images.githubusercontent.com/36286877/222946889-96bbd62b-57b5-4c82-b2ae-7df856c09ac5.png)

6. Press once on the GoFullPage Extension which we installed earlier

![image](https://user-images.githubusercontent.com/36286877/222946912-ee31c756-eaea-4435-b693-ed9ba4b1fc09.png)

It will now start capturing everything in the current window, will all the other unwanted elements removed, the final captured file should only contain the required note.

![image](https://user-images.githubusercontent.com/36286877/222946946-901748cb-148c-4668-af42-7831b99a828a.png)

## Combine .pdf files

If you want to combine `.pdf` files together, you can run `combine.py

1. Copy the `combine.py` file to the current working directory with all the .pdf files

2. Run this command in the current working directory to start the script

```
python .\combine.py
```
