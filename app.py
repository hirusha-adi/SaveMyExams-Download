import os, time, math
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from termcolor import colored
from PIL import Image

def printBanner():
    print(colored("""  __                     _                 
 (_   _.     _  |\/|    |_     _. ._ _   _ 
 __) (_| \/ (/_ |  | \/ |_ >< (_| | | | _> 
                     /                     
          """, 'cyan'))

def loadUrls():
    filename = os.path.join(os.getcwd(), "urls.txt")
    if not os.path.isfile(filename):
        print(colored("[-] './urls.txt' not found", 'red'))
        filename = input(colored("[?] Enter filename with URLs: ", 'yellow'))
    try:
        with open(filename, 'r') as _file:
            return _file.readlines()
    except Exception as e:
        print(colored(f"[-] {e}" ,'red'))
        input(colored("\n\nPress [ENTER] to close window", "magenta"))
        exit()

def loadOptions():
    options = Options()

    ynheadless = input(colored('[?] Enable Headless Mode? (recommended) [Yes/no]: ', 'yellow'))
    if ynheadless.strip().lower().startswith('y') or ynheadless.strip() == '':
        options.add_argument("--headless")
        print(colored(f"[+] Using Headless Mode", 'green'))
    else:
        print(colored(f"[+] NOT Using Headless Mode", 'green'))
        
    optionset = {
        "--disable-extensions": {
            "q": "Disable extensions?",
            "ok": "[+] Added '--disable-extensions'"
        },
        "--disable-gpu": {
            "q": "Disable GPU?",
            "ok": "[+] Added '--disable-gpu'"
        },
        "--disable-infobars": {
            "q": "Disable Info Bars?",
            "ok": "[+] Added '--disable-infobars'"
        },
        "--no-sandbox": {
            "q": "Disable Sandbox?",
            "ok": "[+] Added '--no-sandbox'"
        },
        "--disable-setuid-sandbox": {
            "q": "Disable Set UID Sandbox?",
            "ok": "[+] Added '--disable-setuid-sandbox'"
        },
        "--disable-software-rasterizer": {
            "q": "Disable Software Rasterizer?",
            "ok": "[+] Added '--disable-software-rasterizer'"
        },
        "--disable-webgl": {
            "q": "Disable WebGL?",
            "ok": "[+] Added '--disable-webgl'"
        },
        "--ignore-certificate-errors": {
            "q": "Ignore Certificate Errors?",
            "ok": "[+] Added '--ignore-certificate-errors'"
        },
        "--remote-debugging-port=0": {
            "q": "Set Remote Debugging Port to 0?",
            "ok": "[+] Added '--remote-debugging-port=0'"
        },
        "--start-maximized": {
            "q": "Start Maximized?",
            "ok": "[+] Added '--start-maximized'"
        }
    }
    
    loaddefault = input(colored('[?] Load default settings? (recommended) [Yes/no]: ', 'yellow'))
    loadall =  loaddefault.strip().lower().startswith("y") or loaddefault.strip() == ""
    for opt, dval in optionset.items():
        if loadall:
            options.add_argument(opt)
            print(colored(f"{dval['ok']}", 'green'))
        else:
            userinp = input(colored(f"[?] {dval['q']} [Yes/no]: ", "yellow")).strip().lower()
            if userinp.startswith('y') or userinp == "":
                options.add_argument(opt)
                print(colored(f"{dval['ok']}", 'green'))
    
    return options

def combineImages(image_prefix):
    images = []
    image_files = [f for f in os.listdir(os.getcwd()) if (f.startswith(image_prefix) and f.endswith('.png')) and not('_final' in f)]
        
    for image_file in image_files:
        try:
            images.append(Image.open(image_file))
        except Exception as e:
            print(colored(f"[-] Unable to open : Stopping the combining of images with prefix '{image_file}' : {e}", "red"))
            return

    total_height = int(sum([image.height for image in images])) - 100
    width = max([image.width for image in images])-50

    print(colored(f"[+] Combining Images:\n\tImage Prefix: {image_prefix}\n\tNumber of Images: {len(image_files)}\n\tTotal Height: {total_height}\n\tMaximum Width: {width}", "green"))

    final_image = Image.new("RGB", (width, total_height), color="white")
    
    try:
        height_accumulator = 0
        for image in images:
            final_image.paste(image, (0, height_accumulator))
            height_accumulator += image.height
    except Exception as e:
        print(colored(f"[-] Unable to create new image : Stopping the combining of images with prefix '{image_file}' : {e}", "red"))
        return
        
    final_image_file = f"{image_prefix}_final.png"
    final_image.save(final_image_file)
    
    print(colored(f"[+] Saved Final Image as {final_image_file}", "green"))

def saveImages(url, width, options):
    
    print(colored(f"[+] Starting to save:\n\tURL: {url}\n\tWidth: {width}\n[+] Starting Chrome Webdriver", 'green'))
    driver = webdriver.Chrome(options=options)
    
    print(colored(f"[+] Loading URL: {url}", "green"))
    driver.get(url)
    
    driver.execute_script("document.body.style.zoom='125%'")

    classes = [
        "col-md-4", # side bar to select section
        "fixed-top.main-nav-wrap", # navbar
        "fuse-desktop-h-250.fuse-mobile-h-100.mt-4", # top ad long
        "resource-actions.revision-notes.row.align-items-center", # buttons
        "fuse-h-280.mb-5", # mid ad 1, mid ad 2
        "resource-page-buttons", # bottom buttons
        "download-pdf-ribbon", # download pdf ribbon
        "resource-author", # author info
        "container-fluid.main-footer", # all footer
        "fuse-ad-group", # every ad
        "fuse-h-280.mb-4", # bottom ad
        "fuse-h-280" # in ever mid and bottom ad
    ]

    page_height = driver.execute_script("return document.body.scrollHeight")

    for class_name in classes:
        try:
            driver.execute_script(f"document.querySelector('.{class_name}').remove();")
            
            # I DONT KNOW :-(
            if class_name == "fuse-h-280.mb-5":
                driver.execute_script(f"document.querySelector('.{class_name}')[0].remove();")
                driver.execute_script(f"document.querySelector('.{class_name}')[1].remove();")
            
            print(colored(f"[+] Removed element with  .{class_name}", "green"))
        except Exception as e:
            print(colored(f"[-]: Error removing '.{class_name}': {e}", "red"))
        
    current_page_title = driver.find_element(by=By.CLASS_NAME, value="resource-title").text
    print(colored(f"[+] Resource Title: {current_page_title}", "green"))

    
    print(colored(f"[+] Setting window resolution to {width}x{page_height}", "green"))
    driver.set_window_size(width, page_height)
    
    windowinnerHeight = driver.execute_script("return window.innerHeight")
    
    scroll_how_many_times = math.floor(int(page_height) / int(windowinnerHeight))
    print(colored(f"[+] '{scroll_how_many_times}' images will be generated\n\tPage Height: {page_height}\n\tWindow Height: {windowinnerHeight}\n\tRatio: {int(page_height)/int(windowinnerHeight)}", "green"))

    ffilenames = []
    
    for i in range(int(scroll_how_many_times)):
        filename = f"{current_page_title}_{i+1}.png"
        driver.save_screenshot(filename)
        ffilenames.append(filename)
        print(colored(f"[+] Saved: {filename}", "green"))

        driver.execute_script("window.scrollBy(0, window.innerHeight);")
        time.sleep(1)

    print(colored("[+] Saved all screenshots of the current URL", "green"))

    driver.quit()
    print(colored(f"[+] Closing Chrome Web Driver\n{'='*40}", "green"))
 
    return {'image_prefix': current_page_title, 'filenames': ffilenames}

def deletePartImages(filenames):
    for filename in filenames:
        try:
            os.remove(filename)
            print(colored(f"[+] Deleted {filename}", "green"))
        except Exception as e:
            print(colored(f"[=] Error deleting {filename}: {e}", "red"))

def getAllLinksOfPage(url):
    pass

def temo():
    url = ""
    getAllLinksOfPage(url=url)

def run():
    printBanner()
    urls = loadUrls()
    options = loadOptions()
    yndel = input(colored("[?] Delete original files? [yes/No]: ", "yellow")).strip().lower()
    deleteimg = True
    if yndel.startswith("n"):
        deleteimg = False
    for url in urls:
        datatmp = saveImages(url=url, width=2048, options=options)
        combineImages(image_prefix=datatmp['image_prefix'])
        if deleteimg:
            deletePartImages(filenames=datatmp['filenames'])
        
    
if __name__ == "__main__":
    try:
        run()
    except Exception as e:
        print(colored(f"Error: {e}", "red"))
    finally:
        input(colored("Press [ENTER] to close window", "magenta"))
    