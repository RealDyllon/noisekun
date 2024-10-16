#!/bin/bash

# Set the desired bitrate (adjust as needed)
bitrate="128k"

# Loop through all .ogg files in the current directory
for ogg_file in *.ogg; do
  # Extract the filename without the extension
  base_name="${ogg_file%.*}"

  # Construct the output filename with .m4a extension
  m4a_file="${base_name}.m4a"

  # Use ffmpeg to convert the file
  ffmpeg -i "$ogg_file" -c:a aac -b:a "$bitrate" "$m4a_file"

  # Print a message indicating the conversion (optional)
  echo "Converted '$ogg_file' to '$m4a_file'"
done
