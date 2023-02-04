import os, time, math
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from termcolor import colored

url = "https://www.savemyexams.co.uk/a-level/maths_pure-1/cie/20/revision-notes/1-algebra--functions/1-1-quadratics/1-1-1-expanding-brackets/"

def printBanner():
    print(colored("""  __                     _                 
 (_   _.     _  |\/|    |_     _. ._ _   _ 
 __) (_| \/ (/_ |  | \/ |_ >< (_| | | | _> 
                     /                     
          """, 'magenta'))

def loadUrls():
    filename = os.path.join(os.getcwd(), "urls.txt")
    if not os.path.isfile(filename):
        print(colored("[-] './urls.txt' not found", 'red'))
        filename = input(colored("[?] Enter filename with URLs: ", 'yellow'))
    with open(filename, 'r') as _file:
        return _file.readlines()

def saveImages(url, width, height):

    options = Options()
    options.add_argument("--disable-extensions")
    options.add_argument("--disable-gpu")
    options.add_argument("--disable-infobars")
    options.add_argument("--headless")
    options.add_argument("--disable-impl-side-painting")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-setuid-sandbox")
    options.add_argument("--disable-software-rasterizer")
    options.add_argument("--disable-webgl")
    options.add_argument("--ignore-certificate-errors")
    options.add_argument("--remote-debugging-port=0")
    options.add_argument("--start-maximized")

    driver = webdriver.Chrome(options=options)
    driver.get(url)

    classes = [
        "col-md-4",
        "fixed-top.main-nav-wrap",
        "fuse-desktop-h-250.fuse-mobile-h-100.mt-4",
        "resource-actions.revision-notes.row.align-items-center",
        "fuse-h-280.mb-5",
        "resource-page-buttons",
        "download-pdf-ribbon",
        "resource-author",
        "container-fluid.main-footer"
    ]

    for class_name in classes:
        try:
            driver.execute_script(f"document.querySelector('.{class_name}').remove();")
        except Exception as e:
            print(f"[ERROR]: {e}")
        
    driver.set_window_size(screen_width, screen_height)

    current_page_title = driver.find_element(by=By.CLASS_NAME, value="resource-title").text

    page_height = driver.execute_script("return document.body.scrollHeight")
    windowinnerHeight = driver.execute_script("return window.innerHeight")
    scroll_how_many_times = math.ceil(page_height / windowinnerHeight)

    for i in range(int(scroll_how_many_times)):
        i += 1

        filename = f"{current_page_title}_{i}.png"
        driver.save_screenshot(filename)
        print(f"[+] Saved {filename}")
        
        driver.execute_script("window.scrollBy(0, window.innerHeight);")
        time.sleep(1)

    driver.quit()

def run():
    printBanner()
    urls = loadUrls()
    for url in urls:
        # saveImages(url=url, width=1920, height=1080)
        print(url)

if __name__ == "__main__":
        run()