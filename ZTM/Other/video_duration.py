# generator that takes a directory as an argument and
# yields the duration of all the videos in the directory and all its subdirectories

import os
from moviepy.editor import VideoFileClip

def absolute_file_paths (directory):
for dirpath,_, filenames in os.walk (directory):
for f in filenames:
if f.endswith('.mp4'):
yield os.path.abspath (os.path.join(dirpath, f))

def video_duration (directory):
total duration = 0
for file in absolute_file_paths (directory): 
    clip VideoFileClip (file)
total_duration + clip. duration
return total_duration / 60 # in minutes

path = r'D:\streamlit'
video_duration (path)
# print duration with only two decimal places
print('{.2f}'.format(d))
# print(d)