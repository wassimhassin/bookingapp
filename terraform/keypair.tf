resource "aws_key_pair" "booking_key-pair" {
  key_name   = "booking-key-pair"
  public_key = file("C:\\Users\\LENOVO\\.ssh\\booking-key-pair.pub")
}