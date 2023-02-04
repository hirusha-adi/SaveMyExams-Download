# SaveMyExams Downloader

<p align="center">
  <img src="https://cdn.savemyexams.co.uk/logo/sme-logo.png" />
  <p align="center">Download notes from <a href="https://www.savemyexams.co.uk/">SaveMyExams.co.uk</a> to view them later, offline</p>
</p>




# Disclaimer

Please note that I, the creator of this Free and Open Source project hosted on Github, cannot be held responsible for any actions taken using this script. The purpose of this script is solely to capture screenshots of publicly available information. If there are any concerns or issues related to copyright infringement, please feel free to reach out to me at **hirushaadi@gmail.com** and I will take necessary actions as soon as possible. I do not endorse or encourage any unethical usage of this script and it is intended for educational purposes only. The full responsibility for the use of this script lies solely with the user.

# Installation

## Install Chromedriver for Selenium (Must Do)

1. Visit [chrome://settings/help](chrome://settings/help)
2. Check the current verion of Chrome
    
![image](https://user-images.githubusercontent.com/36286877/216762024-251ba52a-1f19-49e4-9315-7cb6bd90af9b.png)
    
3. Visit [ChromeDriver - WebDriver for Chrome's Download Page](https://chromedriver.chromium.org/downloads)
    
4. Click on Version
    
![image](https://user-images.githubusercontent.com/36286877/216762129-443d731b-3210-4f5f-aa89-9a1550652a49.png)
    
5. Download the zip file
    
![image](https://user-images.githubusercontent.com/36286877/216762186-454513c7-0151-48f5-ad97-bbbad3a9c34c.png)
    
6. Extract the downloaded zip file

![image](https://user-images.githubusercontent.com/36286877/216762234-e2516749-abe6-49fa-898c-0e3d43611929.png) 
    
7. Copy the `chromedriver.exe` to `C:\Windows\System32`
    
![image](https://user-images.githubusercontent.com/36286877/216762290-b18b79ff-1526-4b63-bed6-c1db1192441b.png)


## Installation - Executable

- Download the executable from the [releases page](https://github.com/hirusha-adi/SaveMyExams-Download/releases)

- Get the URLs for the **Revision Notes** from SaveMyExams and save it to `urls.txt`

    ```
    notepad urls.txt
    ```
    
- Double click the downloaded `.exe` to start the app 


## Installation - Python Script

- Install Python from [here](https://www.python.org/downloads/)

- Install the requirements

    ```
    py -m pip install -r requirements.txt
    ```

- Get the URLs for the **Revision Notes** from SaveMyExams and save it to `urls.txt`

    ```
    notepad urls.txt
    ```

- Run the python script

    ```
    py app.py
    ```

# Images

- Running the Executable - 1

![image](https://user-images.githubusercontent.com/36286877/216762815-1c670154-5828-4b36-9007-cf34a9b59a14.png)

- Running the Executable - 2

![image](https://user-images.githubusercontent.com/36286877/216762833-ddc1d4d3-2fbe-4609-9807-57b62f2c9d8d.png)

- Sample Output File

![1 1 1 Expanding Brackets_final](https://user-images.githubusercontent.com/36286877/216762871-837f5909-0466-4f58-bde7-997a8940df45.png)


